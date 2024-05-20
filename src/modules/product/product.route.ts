import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getSingleProductById);
router.post("/create", ProductController.createProduct);

export const productRoute = router;
