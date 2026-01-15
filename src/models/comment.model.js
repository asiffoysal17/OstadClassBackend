import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
    versionkey: false,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
