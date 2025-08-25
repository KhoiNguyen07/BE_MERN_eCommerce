import {StatusCodes} from "http-status-codes";
import {productService} from "../services/productService.js";

const createNew = async (req, res, next) => {
  try {
    // chuyen huong sang service
    const createdProduct = await productService.createNew(req.body);

    // tra data ve client
    res.status(StatusCodes.CREATED).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const listProduct = await productService.getAllProducts();
    res.status(StatusCodes.OK).json(listProduct);
  } catch (error) {
    next(error);
  }
};

const getOneById = async (req, res, next) => {
  const {id} = req.params;
  try {
    const product = await productService.getOneById(id);
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};

const searchItem = async (req, res, next) => {
  try {
    const listProduct = await productService.searchItem(req.body);
    res.status(StatusCodes.OK).json(listProduct);
  } catch (error) {
    next(error);
  }
};

export const productController = {
  createNew,
  getAllProducts,
  getOneById,
  searchItem,
};
