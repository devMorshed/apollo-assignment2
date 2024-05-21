import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();

router.get("/", OrderController.getOrders);
router.post("/", OrderController.createOrder);

export const orderRoute = router;
