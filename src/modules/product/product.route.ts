import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.get("/", ProductController.getProducts);
router.post("/", ProductController.createProduct);
router.get("/:productId", ProductController.getSingleProduct);
router.put("/:productId", ProductController.updateSingleProduct);
router.delete("/:productId", ProductController.deleteProduct);

export const productRoute = router;
