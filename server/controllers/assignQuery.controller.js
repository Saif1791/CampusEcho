import { Faculty } from "../models/faculty.model.js";
import { Query } from "../models/query.model.js";

const assignQuery = async (req, res) => {
  try {
    const { faculty } = req.body;
    const id = req.params.id;

    const foundFaculty = await Faculty.findById(faculty, {
      name: 1,
      emp_id: 1,
      email: 1,
      assigned_queries: -1,
    });

    const updatedQuery = await Query.findByIdAndUpdate(
      { _id: id },
      { $set: { assigned_faculty: foundFaculty } },
      {
        new: true,
      }
    );

    return res
      .status(200)
      .json({ mssg: "Succesfully Updated Query!", updatedQuery });
  } catch (err) {
    return res.status(400).json({ mssg: err });
  }
};

export default assignQuery;
