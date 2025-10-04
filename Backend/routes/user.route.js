import express from "express";
const router = express.Router();
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/user.controller.js";

//UPDATE USER
router.put("/:id", updateUser);

//DELETE USER
router.delete("/:id", deleteUser);

//GET ALL USERS
router.get("/", getAllUsers);

//GET ONE USER 
router.get("/find/:userId", getUser)

export default router;