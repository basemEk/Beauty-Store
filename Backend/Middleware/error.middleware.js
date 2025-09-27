import dotenv from "dotenv";
dotenv.config();

//Catches any request that doesn’t match your defined routes
//Ensures you have a clean, consistent 404 error response instead of just hanging or crashing.
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

//Handles any error thrown in your app and sends a proper JSON response
const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    
    if(err.name === "CastError" && err.kind === "objectId") {
        statusCode = 404;
        message = "Resource not found";
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV == "production" ? null : err.stack  //only shown in development, hidden in production for security
    })
}

export { errorHandler, notFound };




{/*
    Why we need this file overall:
- Centralizes error handling logic (instead of writing try/catch everywhere).
- Ensures consistent JSON error responses across the API.
- Improves debugging in development, hides sensitive details in production.
- Handles common cases like 404s and database ObjectId errors automatically.
- Without this code below, Node would crash or return ugly HTML errors. This gives you clean, predictable error responses.    
*/}