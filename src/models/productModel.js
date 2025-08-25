import Joi from "joi";
import {getDB} from "../config/mongo.js";
import {ObjectId} from "mongodb";

// regex validate object_id
//const OBJECT_ID_RULE = /^[0-9a-fA-F]{24}$/;

const PRODUCT_COLLECTION_NAME = "products";

// validate 1 lan nua truoc khi dua data vao CSDL
const PRODUCT_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().trim().strict(),
  price: Joi.number().required(),
  description: Joi.string().required().trim().strict(),
  image: Joi.array()
    .items(Joi.string().required().trim().strict())
    .min(1)
    .required(),
  category: Joi.string().default(""),
  brand: Joi.string().default(""),
  size: Joi.array().items(Joi.string().trim()).default([]),
  color: Joi.array().items(Joi.string().trim()).default([]),
  stock: Joi.number().integer().min(0).default(0),
  createAt: Joi.date()
    .timestamp("javascript")
    .default(() => Date.now()),
  _destroy: Joi.boolean().default(false),
});

// thuc thi ham validation
const validateBeforeCreate = async (data) => {
  return await PRODUCT_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};

const createNew = async (data) => {
  try {
    // kiem tra co pass qua dc validation hay khong
    const validData = await validateBeforeCreate(data);

    // chuyen huong toi Database
    const createdProduct = await getDB()
      .collection(PRODUCT_COLLECTION_NAME)
      .insertOne(validData);

    // tra data ve cho service
    return createdProduct;
  } catch (error) {
    throw new Error(error);
  }
};

const findOneById = async (id) => {
  try {
    const result = await getDB()
      .collection(PRODUCT_COLLECTION_NAME)
      .findOne({
        _id: new ObjectId(id),
      });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllProducts = async () => {
  try {
    const result = await getDB()
      .collection(PRODUCT_COLLECTION_NAME)
      .find({})
      .toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const searchProducts = async ({name}) => {
  try {
    const result = await getDB()
      .collection(PRODUCT_COLLECTION_NAME)
      .find({
        name: {$regex: name, $options: "i"}, // tìm tương tự, không phân biệt hoa thường
      })
      .toArray();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const productModel = {
  findOneById,
  getAllProducts,
  createNew,
  searchProducts,
};
