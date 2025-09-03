import {StatusCodes} from "http-status-codes";
import {commentService} from "../services/commentService.js";

const createNew = async (req, res, next) => {
  try {
    // chuyen huong sang service
    const result = await commentService.createNew(req.body);

    // tra data ve client
    res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    next(error);
  }
};
const findAllCommentByProductId = async (req, res, next) => {
  const {id} = req.params;
  try {
    // chuyen huong sang service
    const result = await commentService.findAllCommentByProductId(id);

    // tra data ve client
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteCommentById = async (req, res, next) => {
  try {
    // chuyen huong sang service
    const result = await commentService.deleteCommentById(req.body);

    // tra data ve client
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

export const commentController = {
  createNew,
  findAllCommentByProductId,
  deleteCommentById,
};
