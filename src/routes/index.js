import express from "express";
import {productRoutes} from "./productRoute.js";
import {userRoutes} from "./userRoute.js";
import {cartRoutes} from "./cartRoute.js";
import {orderRoutes} from "./orderRoute.js";
import {favoriteRoute} from "./favoriteRoute.js";
import {sepayRoutes} from "./sepayRoute.js";
import {historyTransferRoute} from "./historyTransferRoute.js";
import {commentRoutes} from "./commentRoute.js";

export const API = express.Router();

API.use("/product", productRoutes);
API.use("/user", userRoutes);
API.use("/cart", cartRoutes);
API.use("/order", orderRoutes);
API.use("/favorite", favoriteRoute);
API.use("/sepay", sepayRoutes);
API.use("/historyTransfer", historyTransferRoute);
API.use("/comment", commentRoutes);
