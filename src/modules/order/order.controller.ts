import { Request, Response } from "express";
import { zodOrderSchema } from "./order.validation";
import { OrderServices } from "./order.services";
import { ZodError } from "zod";

// creating orders

const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedOrder = zodOrderSchema.parse(req.body);

    const createdOrder = await OrderServices.createOrderToDB(validatedOrder);

    return res.status(200).json({
      success: true,
      message: "Order Created Successfully",
      data: createdOrder,
    });
  } catch (error) {
    // Error Handling for error format // given criteria
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    // Zod Validation Error Handling
    if (error instanceof ZodError) {
      const validationErrors = error.issues.map((issue) => {
        return issue.message;
      });

      return res.status(400).json({
        success: false,
        message: `Validation Error Occured! ${validationErrors}`,
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
    const email = req.query.email as string;

    const fetchedOrders = await OrderServices.getAllOrdersFromDB(email);

    if (fetchedOrders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const message = email
      ? "Orders fetched successfully for user email!"
      : "Orders fetched successfully!";

    return res.status(200).json({
      success: true,
      message,
      data: fetchedOrders,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to fetch orders!",
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,
};
