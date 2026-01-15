import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema(
  {
    filename: {
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

const File = mongoose.model("File", fileSchema);
export default File;
