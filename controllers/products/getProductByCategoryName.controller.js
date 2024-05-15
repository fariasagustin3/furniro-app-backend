const Product = require("../../models/Product");

const getProductByCategoryName = async (req, res) => {
  try {
    const products = await Product.find({ categoryName: req.params.categoryName })
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { getProductByCategoryName }
