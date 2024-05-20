import { Request, Response } from "express";
import { ProductValidationSchema } from "./product.validation";
import { Product } from "./product.model";

// Create New Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedProduct = ProductValidationSchema.parse(req.body);

    const createdProduct = await Product.create(validatedProduct);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: createdProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
};
