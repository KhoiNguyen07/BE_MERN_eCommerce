import express from "express";
import {productValidation} from "../validations/productValidation.js";
import {productController} from "../controller/productController.js";

export const productRoutes = express.Router();

productRoutes
  .route("/")
  .get(productController.getAllProducts)
  .post(productValidation.createNew, productController.createNew);

productRoutes.route("/search").post(productController.searchItem);

productRoutes.route("/:id").get(productController.getOneById);
