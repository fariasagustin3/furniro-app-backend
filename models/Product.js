const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  colors: {
    type: [String]
  },
  trending: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number
  },
  stock: {
    type: Number,
    default: 1
  },
  SKU: {
    type: String,
  },
  categoryName: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  additionalInformation: {
    type: Array
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Product", ProductSchema)