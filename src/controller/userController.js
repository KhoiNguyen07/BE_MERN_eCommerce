import {StatusCodes} from "http-status-codes";
import {userService} from "../services/userService.js";

const createNew = async (req, res, next) => {
  try {
    // chuyen huong sang service
    const createUser = await userService.createNew(req.body);

    // tra data ve client
    if (createUser) {
      res
        .status(StatusCodes.CREATED)
        .json({...createUser, message: "Create successfully!"});
    } else {
      res.status(StatusCodes.CONFLICT).json({message: "Email already exist!"});
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userAccount = await userService.login(req.body);

    if (userAccount && userAccount._destroy == false) {
      res
        .status(StatusCodes.OK)
        .json({...userAccount, message: "Login successfully!"});
    } else {
      res
        .status(StatusCodes.UNAUTHORIZED)
        .json({message: "Your Account is undefined or expired!"});
    }
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createNew,
  login,
};
