import bcryptjs from "bcryptjs";
import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken";

const adminSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne(
      { email: email },
      { email: 1, password: 1 }
    );

    if (!admin) {
      res
        .status(400)
        .json({ message: "Admin not found! Please contact the management." });
      return;
    }

    if (admin && bcryptjs.compareSync(password, admin.password) === true) {
      const access_token = jwt.sign({ admin: admin }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
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

export default adminSignInController;
