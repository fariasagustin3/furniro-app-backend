const Order = require("../../models/Order");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = { getAllOrders }
