import { Request, Response } from "express";
import { orderSchema } from "./order.validation";
import { OrderServices } from "./order.services";
import { ZodError } from "zod";

const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedOrder = orderSchema.parse(req.body);

    const createdOrder = await OrderServices.createOderToDB(validatedOrder);

    res.status(200).json({
      success: true,
      message: "Order Created Successfully",
      data: createdOrder,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const validationErrors = error.issues.map((issue) => {
        return issue.message;
      });

      return res.status(400).json({
        success: false,
        message: `Validation Error Occured 🔥 ${validationErrors}`,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Creating Order!",
    });
  }
};

export const OrderController = {
  createOrder,
};
