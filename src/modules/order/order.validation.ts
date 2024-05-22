import { z } from "zod";

export const zodOrderSchema = z.object({
  email: z
    .string()
    .email("Email is required and must be a valid email address."),
  productId: z.string().min(1, "Product ID is required and cannot be empty."),
  price: z
    .number()
    .positive("Price is required and must be a positive number."),
  quantity: z
    .number()
    .int()
    .positive("Quantity is required and must be a positive integer."),
});
