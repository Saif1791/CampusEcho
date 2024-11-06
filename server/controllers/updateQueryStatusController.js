import { Query } from "../models/query.model.js";

const updateQueryStatusController = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  try {
    const updatedQuery = await Query.findByIdAndUpdate(id, {
      $set: {
        status: status,
      },
    });

    return res
      .status(200)
      .json({ mssg: "Query updated successfully", query: updatedQuery });
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Query could not be updated: ${err}` });
  }
};

export default updateQueryStatusController;
