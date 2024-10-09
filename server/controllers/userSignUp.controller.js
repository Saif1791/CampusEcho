import { User } from "../models/user.model.js";
import { OTP } from "../models/otp.model.js";
import { mailer } from "../utils/mailer.js";
import bcryptjs from "bcryptjs";

const userSignUpController = async (req, res) => {
  try {
    const { name, email, password, phone, RRN, otp } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    if (await User.findOne({ email: email }, { email: 1 })) {
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

    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

    if (!response) {
      res.status(400).json({ message: "Invalid Email" });
      return;
    }

    if (otp === response[0].otp) {
      await newUser.save();
      res
        .status(200)
        .json({ message: "User created successfully", data: newUser });

      mailer(email, "Welcome to Campus Echo", `Welcome ${name} to Campus Echo`);
    } else {
      res.status(400).json({ message: "Wrong OTP" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

export default userSignUpController;
