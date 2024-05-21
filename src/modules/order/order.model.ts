import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";

const OrderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
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

export const Order = model<IOrder>("Oder", OrderSchema);
 