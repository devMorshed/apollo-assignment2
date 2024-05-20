import { Request, Response } from "express";
import { ProductValidationSchema } from "./product.validation";
import { Product } from "./product.model";

// Create New Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedProduct = ProductValidationSchema.parse(req.body);
    if (!validatedProduct) {
      console.log("Recieved Invalid Product"); // Error #TODO
    }

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

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const fetchedProducts = await Product.find();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: fetchedProducts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
};
