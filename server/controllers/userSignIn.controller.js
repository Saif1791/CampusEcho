import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne(
      { email: email },
      { email: 1, password: 1 }
    );

    if (!user) {
      res
        .status(400)
        .json({ message: "User not found! Please try again or Sign Up." });
      return;
    }

    if (user && bcryptjs.compareSync(password, user.password) === true) {
      const access_token = jwt.sign(
        { user: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
      res
        .cookie("access_token", access_token, { httpOnly: true })
        .status(200)
        .json("Signed In Successfully");
      return;
    } else {
      res
        .status(400)
        .json({ message: "Invalid or Wrong Password! Please try again." });
    }
  } catch (err) {
    console.log(err);
  }
};

export default userSignInController;
