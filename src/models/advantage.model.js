import mongoose, { Schema } from "mongoose";

const advantageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    percent: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    time: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Advantage = mongoose.model("Advantage", advantageSchema);
export default Advantage;
