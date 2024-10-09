import jwt from "jsonwebtoken";

const verifyAdmin = (req, res, next) => {
  const access_token = req.cookies.access_token;

  if (!access_token) {
    return res.status(401).json({
      message:
        "Unauthorized! You have to be an Admin to perform the following action!",
    });
  }

  const admin = jwt.verify(
    access_token,
    process.env.JWT_SECRET,
    (err, user) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized", error: err });
      } else if (user.role === "admin") {
        req.user = user;
      } else {
        return res.status(401).json({
          message:
            "Unauthorized! You have to be an Admin to perform the following action!",
        });
      }

      next();
    }
  );
};

export default verifyAdmin;
