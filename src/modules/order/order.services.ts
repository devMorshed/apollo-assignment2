import { zodOrderValidation } from "./order.validation";
import { Order } from "./order.model";

const createOderToDB = async (order: zodOrderValidation) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrdersFromDB = async (email: string) => {
  console.log(email);

  let query = {};

  if (email) {
    query = { email };
  }

  console.log(query);

  const result = await Order.find(query);
  return result;
};

export const OrderServices = {
  createOderToDB,
  getAllOrdersFromDB,
};
