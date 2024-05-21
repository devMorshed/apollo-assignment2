import { Request, Response } from "express";
import { ProductValidationSchema } from "./product.validation";
import { Product } from "./product.model";
import { ZodError } from "zod";
import { MongooseError } from "mongoose";

// Create New Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedProduct = ProductValidationSchema.parse(req.body);

    const createdProduct = await Product.create(validatedProduct);

    return res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: createdProduct,
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
      message: "Something Went Wrong While Creating Product!",
    });
  }
};

const getAllProduct = async (_req: Request, res: Response) => {
  try {
    const fetchedProducts = await Product.find();
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: fetchedProducts,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to fetch products!",
    });
  }
};

const getSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const dbProduct = await Product.findById(productId);

    if (!dbProduct) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found! EH?",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: dbProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Failed to fetch product!",
    });
  }
};

const updateSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const productDataToUpdate = ProductValidationSchema.parse(req.body);

    const updatedProductData = await Product.findByIdAndUpdate(
      productId,
      productDataToUpdate,
      { new: true }
    );

    if (!updatedProductData) {
      return res.status(500).json({
        success: false,
        message: "Failed to update product data!",
      });
    }

    if (updatedProductData) {
      return res.status(200).json({
        success: true,
        message: "Product Updated successfully!",
        data: updatedProductData,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating product data!",
    });
  }
};

const deleteSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await Product.deleteOne({ _id: productId });

    if (deletedProduct.deletedCount) {
      return res.status(200).json({
        success: true,
        message: "Product Deleted successfully!",
        data: null,
      });
    }

    return res.status(200).json({
      success: false,
      message: "Failed To Delete Product!",
    });
  } catch (error) {
    return res.status(500).json({
      succeess: false,
      message: "Something went wrong while deleting product",
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProductById,
  updateSingleProductById,
  deleteSingleProductById,
};
