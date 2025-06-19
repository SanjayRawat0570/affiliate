import mongoose from "mongoose";
const { Schema, model } = mongoose;
const productSchema = new Schema(
  {
    Heading: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    price: { type: Number, required: true },
    brand: { type: String },
    inStock: { type: Boolean, default: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    features: {
      type: [String], 
    },
    tags: {
      type: [String],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    }
  },
  { timestamps: true }
);

export default model("Product", productSchema);
