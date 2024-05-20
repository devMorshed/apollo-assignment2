import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.post("/create", ProductController.createProduct);

export const productRoute = router;
