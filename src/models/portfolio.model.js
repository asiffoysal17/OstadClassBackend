import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    img: { type: String },
    link: { type: String },
    category: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
