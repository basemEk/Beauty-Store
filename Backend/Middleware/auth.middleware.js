import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

dotenv.config();

const protect = asyncHandler(async(req, res, next) => {
    let token;
    token = req.cookies.jwt

    if(token) {      //check if valid and not expired   
        try{
            const decodedToken = jwt.verify(token, process.env.JWT_SEC);
            req.user = await User.findById(decodedToken.userId).select("-password");   //Excludes the password field for security reason.
            next();
        }catch(error){
            res.status(401);
            throw new Error("Not authorized, invalid or expired token");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});


export default protect;
