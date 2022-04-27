import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import config from "./config.js";

import path from "path";

import userRouter from "./routers/userRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5002;
const __dirname = path.resolve();

app.use("/api/users", userRouter);

//** Error handler */
app.use((err, req, res, next) => {
  res.status(500, res.send({ message: err.message }));
});

const mongodbURI = config.MONGODB_URI;

mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error.reason));

//** Validating connecting to server */
app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
});

export default app;
