import {historyTransfersModel} from "../models/historyTransfersModel.js";
import {cartModel} from "../models/cartModel.js";

const findOneByOrderId = async ({orderId}) => {
  try {
    const result = await historyTransfersModel.findOneByOrderId(orderId);
    if (result.success) await cartModel.deleteAllCart();
    return result;
    // lat tat ca pro
  } catch (error) {
    throw error;
  }
};

export const historyTransferService = {
  findOneByOrderId,
};
