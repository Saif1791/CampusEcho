import { Query } from "../models/query.model.js";

const createQueryController = async (req, res) => {
  try {
    const { title, description, images, status, tags } = req.body;
    const author = req.user.user;

    if (!req.user || !req.user.user) {
      return res.status(401).json({
        message: "Unauthorized: user not found in body",
        err: author,
      });
    }

    const newQuery = new Query({
      title: title,
      description: description,
      images: images,
      status: status,
      tags: tags,
      author: author,
    });

    await newQuery.save();
    return res
      .status(200)
      .json({ message: "Query created successfully", data: newQuery });
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Query could not be created: ${err}` });
  }
};

export default createQueryController;
