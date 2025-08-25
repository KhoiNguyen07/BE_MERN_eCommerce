import express from "express";
import {favoriteController} from "../controller/favoriteController.js";

export const favoriteRoute = express.Router();

favoriteRoute.route("/create-new").post(favoriteController.createNew);

favoriteRoute.route("/get-favorite").post(favoriteController.getAllFavorite);
favoriteRoute
  .route("/get-by-productId")
  .post(favoriteController.findOneByProductId);

favoriteRoute.route("/get-by-id").post(favoriteController.getById);

favoriteRoute.route("/delete").delete(favoriteController.deleteFavorite);
favoriteRoute.route("/delete-all").delete(favoriteController.deleteAllFavorite);
