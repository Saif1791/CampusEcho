import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import signUpRoute from "./routes/signup.route.js";
import signInRoute from "./routes/signin.route.js";
import getOTPRoute from "./routes/sendOTP.route.js";
import signOutRoute from "./routes/signout.route.js";

const app = express();
const port = 3000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/", getOTPRoute);
app.use("/", signOutRoute);
app.use("/user", signUpRoute);
app.use("/user", signInRoute);
