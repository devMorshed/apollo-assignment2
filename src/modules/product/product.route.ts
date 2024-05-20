import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.get("/", ProductController.getAllProduct);
router.post("/create", ProductController.createProduct);

export const productRoute = router;
