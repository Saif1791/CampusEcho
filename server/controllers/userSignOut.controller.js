const userSignOutController = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(201).json({ message: "Signed out Successfully" });
  } catch (err) {
    res.status(401).json({ message: "Could not sign out" });
  }
};

export default userSignOutController;
