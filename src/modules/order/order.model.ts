import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";
import { Product } from "../product/product.model";

const OrderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    required: true,
    type: Number,
  },
  quantity: {
    required: true,
    type: Number,
  },
});

OrderSchema.pre("save", async function (next) {
  const dbProduct = await Product.findById(this.productId);

  if (dbProduct) {
    if (this.quantity > dbProduct.inventory.quantity) {
      throw Error("Insufficient quantity available in inventory");
    }
    const remainingQuantity = dbProduct.inventory.quantity - this.quantity;

    if (remainingQuantity == 0) {
      dbProduct.inventory.inStock = false;
    }
    dbProduct.inventory.quantity = remainingQuantity;
    await dbProduct.save();
  } else {
    throw Error("Product Not Found");
  }

  next();
});

export const Order = model<IOrder>("Order", OrderSchema);
