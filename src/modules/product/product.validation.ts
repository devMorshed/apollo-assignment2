import { z } from "zod";

export const VariantValidationSchema = z.object({
  type: z
    .string()
    .min(1, { message: "Variant type is required and must be a string." }),
  value: z
    .string()
    .min(1, { message: "Variant value is required and must be a string." }),
});

export const ProductValidationSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Product name is required and must be a string." }),
  description: z.string().min(1, {
    message: "Product description is required and must be a string.",
  }),
  price: z.number().nonnegative({
    message: "Product price is required and must be a non-negative number.",
  }),
  category: z
    .string()
    .min(1, { message: "Product category is required and must be a string." }),
  tags: z
    .array(z.string().min(1, { message: "Tag must be a non-empty string." }))
    .min(1, { message: "There must be at least one tag." }),
  variants: z
    .array(VariantValidationSchema)
    .min(1, { message: "There must be at least one variant." }),
  inventory: z.object({
    quantity: z.number().nonnegative({
      message:
        "Product quantity is required and must be a non-negative number.",
    }),
    inStock: z.boolean({
      required_error: "In-stock status is required and must be a boolean.",
    }),
  }),
});
