import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, "Please provide the product name"],
  },
  description: {
    type: String,
    required: [true, "Please provide the product description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the product price"],
  },
  category: {
    type: String,
    required: [true, "Please provide the product category"],
  },
  tags: {
    type: [String],
    required: [true, "Please provide the product tags"],
  },
  variants: [
    {
      _id: false,
      type: {
        type: String,
        required: [true, "Please provide the product variants type"],
      },
      value: {
        type: String,
        required: [true, "Please provide the product variants value"],
      },
    },
  ],
  inventory: {
    quantity: {
      type: Number,
      required: [true, "Please provide products intventory quantity"],
      default: 1,
    },
    inStock: {
      type: Boolean,
      required: [true],
      default: true,
    },
  },
});

export const Product = model("Product", ProductSchema);
