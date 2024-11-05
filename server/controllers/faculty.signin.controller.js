import bcryptjs from "bcryptjs";
import { Faculty } from "../models/faculty.model.js";
import jwt from "jsonwebtoken";

const facultySignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const faculty = await Faculty.findOne(
      { email: email },
      { email: 1, password: 1 }
    );

    if (!faculty) {
      res
        .status(400)
        .json({ message: "Faculty not found! Please contact the management." });
      return;
    }

    if (faculty && bcryptjs.compareSync(password, faculty.password) === true) {
      const access_token = jwt.sign({ faculty: faculty }, process.env.JWT_SECRET, {
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

export default facultySignInController;
