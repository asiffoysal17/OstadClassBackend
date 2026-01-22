import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    company: { type: String },
    description: { type: String },
    time: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
