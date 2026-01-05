import mongoose from "mongoose";

const conceptSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    tags: [String],

    attachments: [
      {
        filename: String,
        originalName: String,
        mimeType: String,
        path: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Concept", conceptSchema);
