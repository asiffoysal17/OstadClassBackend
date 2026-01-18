import { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: String,
    img: String,
    category: String,
    description: String,
    short_description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Blog = model("Blog", blogSchema);

export default Blog;
