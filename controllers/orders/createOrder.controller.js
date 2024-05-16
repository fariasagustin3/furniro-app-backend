const Order = require("../../models/Order");

const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const orderSaved = await newOrder.save();
    res.status(201).json(orderSaved);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
}

module.exports = { createOrder }
