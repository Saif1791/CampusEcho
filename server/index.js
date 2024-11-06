import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieparser from "cookie-parser";
import bodyParser from "body-parser";
import signUpRoute from "./routes/signup.route.js";
import signInRoute from "./routes/signin.route.js";
import getOTPRoute from "./routes/sendOTP.route.js";
import signOutRoute from "./routes/signout.route.js";
import createQueryRoute from "./routes/createQuery.route.js";
import getQueryRoute from "./routes/getQuery.route.js";
import updateQueryRoute from "./routes/updateQuery.route.js";
import adminSignInRoute from "./routes/admin.signin.route.js";
import facultySignInRoute from "./routes/faculty.signin.route.js";
import updateQueryStatusRoute from "./routes/updateQueryStatus.js";

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
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", getOTPRoute);
app.use("/", signOutRoute);

app.use("/user", signUpRoute);
app.use("/user", signInRoute);

app.use("/user", createQueryRoute);
app.use("/query", getQueryRoute);
app.use("/query/update", updateQueryRoute);
app.use("/query/update", updateQueryStatusRoute);

app.use("/", facultySignInRoute);

app.use("/", adminSignInRoute);
