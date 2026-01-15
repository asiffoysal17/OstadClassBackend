import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    img: {
      type: String,
      required: true,
      trim: true,
    },

    feedback: {
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

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;
