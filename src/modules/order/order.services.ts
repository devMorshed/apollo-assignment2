import { zodOrderValidation } from "./order.validation";
import { Order } from "./order.model";

const createOderToDB = async (order: zodOrderValidation) => {
  const result = await Order.create(order);
  return result;
};

export const OrderServices = {
  createOderToDB,
};
