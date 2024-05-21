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

const getOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await OrderServices.getAllOrdersFromDB();

    if (allOrders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: allOrders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,
};
