import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

import dotenv from "dotenv";

const app = express();
dotenv.config();

const configDB = (app) => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6eyo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() =>
      app.listen(process.env.PORT, () =>
        console.log(
          `server is running on: http://localhost:${process.env.PORT}`
        )
      )
    )
    .catch((err) => console.log(err.message));

  mongoose.set("useFindAndModify", false);
};

const configServer = (app) => {
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(cors());
};

const configRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("API");
  });

  app.use("/posts", postRoutes);
  app.use("/user", userRoutes);
};

const runServer = (arg) => {
  configDB(app);
  configServer(arg);
  configRoutes(arg);
};

runServer(app);
