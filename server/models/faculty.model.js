import mongoose from "mongoose";

const facultySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    emp_id: {
      type: String,
      required: true,
      unique: true,
    },
    assigned_queries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AssignedQuery",
      },
    ],
    role: {
      type: String,
      default: "faculty",
    },
  },
  {
    timestamps: true,
  }
);

export const Faculty = new mongoose.model("Faculty", facultySchema);
