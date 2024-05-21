// order.validation.ts

import { z } from "zod";
import mongoose from "mongoose";

export const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid product ID",
  }),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export type zodOrderValidation = z.infer<typeof orderSchema>;
