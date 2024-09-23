import mongoose from "mongoose";

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
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assigned_faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
    },
  },
  {
    timestamps: true,
  }
);

export const Query = mongoose.model("Query", querySchema);
