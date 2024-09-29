import { Query } from "../models/query.model.js";

export const getQueryController = async (req, res) => {
  try {
    const { id } = req.params;

    const query = await Query.findById(id);

    return res.status(200).json(query);
  } catch (err) {
    return res.status(400).json({ message: `Query not found: ${err}` });
  }
};

export const getQueriesController = async (req, res) => {
  try {
    const queries = await Query.find();

    return res.status(200).json(queries);
  } catch (err) {
    return res.status(401).json(err);
  }
};
