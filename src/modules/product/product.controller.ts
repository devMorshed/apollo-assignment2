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
    res.status(500).json({
      success: false,
      message: "Something went wrong at adding product to DB",
      error,
    });
  }
};

const getAllProduct = async (_req: Request, res: Response) => {
  try {
    const fetchedProducts = await Product.find();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: fetchedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong at fetching all products",
      error,
    });
  }
};

const getSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const dbProduct = await Product.findById(productId);

    if (!dbProduct) {
      res.status(404).json({
        success: false,
        message: "Product Not Found!",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: dbProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong at fetching product by ID",
      error,
    });
  }
};

const updateSingleProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productDataFromClient = req.body;

    const validatedNewProductData = ProductValidationSchema.parse(
      productDataFromClient
    );

    const updatedProductData = await Product.findByIdAndUpdate(
      productId,
      validatedNewProductData,
      { new: true }
    );

    if (!updatedProductData) {
      res.status(500).json({
        success: false,
        message: "Failed to update product data \n Maybe Product not Found",
        data: null,
      });
    }

    if (updatedProductData) {
      res.status(200).json({
        success: true,
        message: "Product Updated successfully!",
        data: updatedProductData,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong at updating product by ID",
      error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProductById,
  updateSingleProductById,
};
