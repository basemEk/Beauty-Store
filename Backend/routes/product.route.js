import {ratingProduct, getAllProducts, getProduct, createProduct, updateProduct, deleteProduct} from "../controllers/product.controller.js";
import express from "express";
const router = express.Router();

//RATING PRODUCT
router.get("/find/:productId", ratingProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

//GET ONE PRODUCT
router.get("/find/:id", getProduct);

//CREATE PRODUCT
router.post("/", createProduct);

//UPDATE PRODUCT
router.put("/:id", updateProduct);

//DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;