import { Schema, model } from "mongoose";
import { IProduct, IVariant } from "./product.interface";

const VariantSchema = new Schema<IVariant>({
  type: {
    type: String,
    required: [true, "Please provide the product variants type"],
  },
  value: {
    type: String,
    required: [true, "Please provide the product variants type"],
  },
});

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
  variants: {
    type: [VariantSchema],
    required: [true, "Please provide the product variants"],
  },
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
