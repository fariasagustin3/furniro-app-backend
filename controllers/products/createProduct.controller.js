const Product = require("../../models/Product");

const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const product = await newProduct.save();
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { createProduct }
