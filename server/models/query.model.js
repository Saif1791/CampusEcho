import mongoose from "mongoose";

import { facultySchema } from "./faculty.model.js";

const querySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    images: [],
    status: {
      type: String,
      default: "pending",
    },
    tags: {
      type: [],
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assigned_faculty: {
      // type: mongoose.Schema.Types.ObjectId,
      type: facultySchema,
      ref: "Faculty",
    },
  },
  {
    timestamps: true,
  }
);

export const Query = mongoose.model("Query", querySchema);
