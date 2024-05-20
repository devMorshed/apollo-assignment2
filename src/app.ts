import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./config";

const app: Application = express();

app.use(
  cors({
    origin: config.origin,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/api/v1/test", (_req: Request, res: Response) =>
  res.status(200).json({
    success: true,
    message: "SERVER RUNNING",
  })
),
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
  });

export default app;
