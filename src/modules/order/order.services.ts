import { zodOrderValidation } from "./order.validation";
import { Order } from "./order.model";

const createOderToDB = async (order: zodOrderValidation) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

export const OrderServices = {
  createOderToDB,
  getAllOrdersFromDB,
};
