import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDb = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;
};

const getProductsFromDB = async (searchTerm: string) => {
    
  let query = {};

  if (searchTerm) {
    query = {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { tags: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
      ],
    };
  }
  const result = await Product.find(query);
  return result;
};

const getSingleProductByID = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProductByID = async (id: string, product: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, product, { new: true });
  return result;
};

const deleteSingleProductByID = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getProductsFromDB,
  getSingleProductByID,
  updateSingleProductByID,
  deleteSingleProductByID,
};
