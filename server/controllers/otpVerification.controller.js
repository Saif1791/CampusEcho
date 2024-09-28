import { OTP } from "../models/otp.model.js";
import { mailer } from "../utils/mailer.js";
import otpGenerator from "otp-generator";

const otpVerificationController = async (req, res) => {
  try {
    const { email } = req.body;

    const generatedOTP = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    mailer(
      email,
      "OTP to verify your Campus Echo Sign Up",
      `Please enter the following OTP to verify your account: ${generatedOTP}`
    );

    const newOTP = new OTP({
      email: email,
      otp: generatedOTP,
    });

    await newOTP.save();

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    res.status(400).json({ message: "OTP could not be sent" });
    console.log(err);
  }
};

export default otpVerificationController;
