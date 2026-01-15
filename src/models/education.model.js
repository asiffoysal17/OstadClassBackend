import mongoose, { Schema } from "mongoose";

const educationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    institute: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
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

const Education = mongoose.model("Education", educationSchema);
export default Education;
