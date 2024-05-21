import mongoose, { Document } from "mongoose";

export interface IOrder extends Document {
  email: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
}
