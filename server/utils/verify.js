import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const access_token = req.cookies.access_token;

  if (!access_token) {
    return res
      .status(401)
      .json({ message: "Unauthorized! Please Sign In to create a Query!" });
  }

  const user = jwt.verify(access_token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized", error: err });
    }

    req.user = user;
    next();
  });
};

export default verify;
