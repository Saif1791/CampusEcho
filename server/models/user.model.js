import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    RRN: {
      type: String,
      required: true,
      unique: true,
    },
    queries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Query",
      },
    ],
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
