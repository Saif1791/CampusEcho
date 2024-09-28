import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { mailer } from "../utils/mailer.js";
import otpGenerator from "otp-generator";

const userSignUpController = async (req, res) => {
  try {
    const { name, email, password, phone, RRN } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    if (await User.findOne({ email: email })) {
      res.status(400).json({ message: "User already exists! Please Sign In!" });
      return;
    }

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      RRN: RRN,
    });

    const OTP = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    mailer(
      email,
      "OTP to verify your Campus Echo Sign Up",
      `Please enter the following OTP to verify your account: ${OTP}`
    );

    await newUser.save();
    res.status(200).json(newUser);
    // res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

export default userSignUpController;
