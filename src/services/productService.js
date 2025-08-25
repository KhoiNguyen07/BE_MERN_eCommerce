import {productModel} from "../models/productModel.js";

const createNew = async (reqBody) => {
  try {
    const newProduct = {
      ...reqBody,
    };
    // chuyen huong toi model
    const createdProduct = await productModel.createNew(newProduct);

    // tra data ve controller
    return createdProduct;
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const listProduct = await productModel.getAllProducts();
    // lat tat ca pro
    return listProduct;
  } catch (error) {
    throw error;
  }
};

const getOneById = async (id) => {
  try {
    const product = await productModel.findOneById(id);
    // lat tat ca pro
    return product;
  } catch (error) {
    throw error;
  }
};

const searchItem = async (name) => {
  try {
    const product = await productModel.searchProducts(name);
    // lat tat ca pro
    return product;
  } catch (error) {
    throw error;
  }
};

export const productService = {
  createNew,
  getAllProducts,
  getOneById,
  searchItem,
};
