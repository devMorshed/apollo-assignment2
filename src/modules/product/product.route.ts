import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.get("/", ProductController.getProducts);
router.get("/:productId", ProductController.getSingleProduct);
router.put("/:productId", ProductController.updateSingleProduct);
router.delete("/:productId", ProductController.deleteProduct);
router.post("/create", ProductController.createProduct);

export const productRoute = router;
