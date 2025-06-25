import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  url: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^https?:\/\/.+\..+/.test(v),
      message: "Invalid URL format",
    },
  },
  notes: { type: String },
  tags: [{ type: String }],
  wishlist: { type: Boolean, default: false },
  favorite: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Book", bookSchema);
