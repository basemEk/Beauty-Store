import express from "express";
const router = express.Router();
import { createBanner, deleteBanner, getAllBanners, getRandomBanner } from "../controllers/banner.controller.js";

//CREATE BANNER
router.post("/", createBanner);

//GET ALL BANNERS
router.get("/", getAllBanners);

//GE RANDOM BANNER
router.get("/random", getRandomBanner);

//DELETE BANNER
router.delete("/:id", deleteBanner);

export default router;