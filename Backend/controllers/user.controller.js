import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

//UPDATE USER
const updateUser = asyncHandler(async(req, res) => {
    if(req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {$new: true}
    );

    if(!updatedUser) {
        res.status(400);
        throw new Error("User was not updated")
    } else {
        res.status(201).json(updatedUser);
    }
});


//DELETE USER
const deleteUser = asyncHandler(async(req, res) => {
    const deletedUser = await findByIdAndDelete(req.params.id);
    if(!deletedUser) {
        res.status(400);
        throw new Error("User was not deleted");
    } else {
        res.status(201).json("User deleted successfully")
    }
});


//GET ONE USER
const getUser = asyncHandler(async(req, res) => {
    const User = findById(req.params.id);
    if(!User) {
        res.status(400);
        throw new Error("User not found");
    } else {
        res.status(200).json(User);
    }
});


//GET ALL USERS
const getAllUsers = asyncHandler(async(req, res) => {
    const users = await find();
    if(!users) {
        res.status(400);
        throw new Error("Users not found");
    } else {
        res.status(200).json(users);
    }

});


export { updateUser, deleteUser, getUser, getAllUsers };