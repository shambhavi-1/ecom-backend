const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      minilength: [0, "Pric is positive number"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minilength: [10, "Description must be at least 10 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["men's clothing", "women's clothing"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    rating: {
      rate: {
        type: Number,
        required: [true, "Rating is required"],
        min: [0, "Rate cannot be below 0"],
        max: [5, "Rate cannot be above 5"],
      },
      count: {
        type: Number,
        required: [true, "Rating count is required"],
        min: [0, "Count connot be negative"],
      },
    },
  },
  { timestamps: true }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
