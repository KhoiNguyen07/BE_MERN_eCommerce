import express from "express";
import {commentController} from "../controller/commentController.js";

export const commentRoutes = express.Router();

commentRoutes.route("/create-new").post(commentController.createNew);
commentRoutes
  .route("/findAllCommentByProductId/:id")
  .get(commentController.findAllCommentByProductId);
commentRoutes
  .route("/deleteCommentById")
  .delete(commentController.deleteCommentById);
