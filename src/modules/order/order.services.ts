import { Order } from "./order.model";
import { IOrder } from "./order.interface";

const createOrderToDB = async (order: IOrder) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrdersFromDB = async (email: string) => {
  let query = {};

  if (email) {
    query = { email };
  }

  const result = await Order.find(query);
  return result;
};

export const OrderServices = {
  createOrderToDB,
  getAllOrdersFromDB,
};
