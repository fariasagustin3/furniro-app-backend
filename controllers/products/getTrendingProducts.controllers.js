const Product = require("../../models/Product");

const getTrendingProducts = async (req, res) => {
  try {
    const products = await Product.find({ trending: true });
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { getTrendingProducts }
