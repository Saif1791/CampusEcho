import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose
  .connect(
    `mongodb+srv://saifsep17:${process.env.MONGO_PASSWORD}@cluster0.9uz89.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
