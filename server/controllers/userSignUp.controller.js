import { User } from "../models/user.model.js";

const userSignUpController = async (req, res) => {
  try {
    const { name, email, password, phone, RRN } = req.body;

    if (await User.findOne({ email: email })) {
      res.status(400).json({ message: "User already exists! Please Sign In!" });
      return;
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password,
        phone: phone,
        RRN: RRN,
      });

      await newUser.save();
      res.status(200).json(newUser);
      res.status(201).json({ message: "User created successfully!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log(err);
  }
};

export default userSignUpController;
