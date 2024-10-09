import { Query } from "../models/query.model.js";

export default assignQuery = (req, res) => {
  const { id, faculty } = req.body;

  const query = Query.findById({ id: id });

  Query.updateOne({ id: id }, {});
};
