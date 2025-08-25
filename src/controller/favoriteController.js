import {StatusCodes} from "http-status-codes";
import {favoriteService} from "../services/favoriteService.js";

const createNew = async (req, res, next) => {
  try {
    // chuyen huong sang service

    const createFavorite = await favoriteService.createNew(req.body);
    // tra data ve client
    res
      .status(StatusCodes.CREATED)
      .json({...createFavorite, message: "Added to favorites!"});
  } catch (error) {
    next(error);
  }
};

const getAllFavorite = async (req, res, next) => {
  try {
    const result = await favoriteService.getAllFavorite(req.body);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const result = await favoriteService.getById(req.body);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};
const findOneByProductId = async (req, res, next) => {
  try {
    const result = await favoriteService.findOneByProductId(req.body);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteFavorite = async (req, res, next) => {
  try {
    const result = await favoriteService.deleteFavorite(req.body);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteAllFavorite = async (req, res, next) => {
  try {
    const result = await cartService.deleteAllCart();
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

export const favoriteController = {
  createNew,
  getAllFavorite,
  deleteFavorite,
  deleteAllFavorite,
  getById,
  findOneByProductId,
};
