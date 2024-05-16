const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: {
    type: Array,
  },
  total: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String
  },
  companyName: {
    type: String,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  town: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  additionalInformation: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Order", OrderSchema)