import { Request, Response } from "express";
import { ZodError } from "zod";
import { ProductServices } from "./product.services";
import { zodProductSchema } from "./product.validation";

// Create New Product
const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedProduct = zodProductSchema.parse(req.body);

    const createdProduct = await ProductServices.createProductIntoDb(
      validatedProduct
    );

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

const getProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;

    const fetchedProducts = await ProductServices.getProductsFromDB(searchTerm);

    const message = searchTerm
      ? fetchedProducts.length === 0
        ? `No Product Found by ${searchTerm}`
        : `Products matching search term ${searchTerm} fetched successfully!`
      : "Products fetched successfully!";

    return res.status(200).json({
      success: true,
      message,
      data: fetchedProducts,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to fetch products!",
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const dbProduct = await ProductServices.getSingleProductByID(productId);

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

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const productDataToUpdate = zodProductSchema.parse(req.body);

    const updatedProductData = await ProductServices.updateSingleProductByID(
      productId,
      productDataToUpdate
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await ProductServices.deleteSingleProductByID(
      productId
    );

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
  getProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
};
