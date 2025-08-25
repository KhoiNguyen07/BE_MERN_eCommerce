import {orderModel} from "../models/orderModel.js";

const createNew = async (reqBody) => {
  try {
    // chuyen huong toi model
    const result = await orderModel.createNew(reqBody);
    if (!result) return null;

    const getNewOrder = await orderModel.findOneById(result.insertedId);

    // clear list cart
    // await cartModel.deleteAllCart();
    // tra data ve controller
    return getNewOrder;
  } catch (error) {
    throw error;
  }
};

const getById = async ({id}) => {
  try {
    // chuyen huong toi model
    const result = await orderModel.findOneById(id);
    return result;
  } catch (error) {
    throw error;
  }
};
const updateStatusById = async (reqBody) => {
  const {id, value} = reqBody;
  try {
    // chuyen huong toi model
    const result = await orderModel.updateStatusById(id, value);
    return result;
  } catch (error) {
    throw error;
  }
};

export const orderService = {
  createNew,
  getById,
  updateStatusById,
};
