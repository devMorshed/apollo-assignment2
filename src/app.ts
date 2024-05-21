import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";
import { productRoute } from "./modules/product/product.route";
import { orderRoute } from "./modules/order/order.route";

const app: Application = express();

app.use(
  cors({
    origin: config.origin,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Product Routes
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// Test Route
app.get("/", (_req, res: Response) =>
  res.status(200).json({
    success: true,
    message: "SERVER RUNNING 🔥",
  })
);

// Catch All Route
app.all("*", (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
