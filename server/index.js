import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("API");
});

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mern-project.6eyo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server is running on: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
