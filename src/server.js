import express from "express";
import {connectDB} from "./config/mongo.js";
import {API} from "./routes/index.js";
import {errorHandlingMiddleware} from "./middlewares/errorHandlingMiddleware .js";
import cors from "cors";

const START_SERVER = () => {
  const app = express();
  const port = 8080;
  const host = "localhost";

  // cors
  app.use(cors());
  // use api
  app.use(express.json());
  app.use("/", API);

  // middleware
  app.use(errorHandlingMiddleware);

  // chay local
  // app.listen(port, host, () => {
  //   console.log(`Your server is running at: http://${host}:${port}`);
  // });

  app.listen(process.env.PORT, host, () => {
    console.log(`Your server is running at PORT: ${process.env.PORT}`);
  });
};

connectDB()
  .then(() => {
    console.log("DB Connected");
  })
  .then(() => {
    START_SERVER();
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
