import {userModel} from "../models/userModel.js";

const createNew = async (reqBody) => {
  try {
    const newUser = {
      ...reqBody,
    };

    // chuyen huong toi model
    const createUser = await userModel.createNew(newUser);
    if (!createUser) return null;

    const getNewUser = await userModel.findOneById(createUser.insertedId);
    // tra data ve controller
    return getNewUser;
  } catch (error) {
    throw error;
  }
};

const login = async (reqBody) => {
  try {
    const userAccount = await userModel.login(reqBody);
    // lat tat ca pro
    return userAccount;
  } catch (error) {
    throw error;
  }
};

export const userService = {
  createNew,
  login,
};
