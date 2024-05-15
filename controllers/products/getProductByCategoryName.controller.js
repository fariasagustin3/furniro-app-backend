const Product = require("../../models/Product");

const getProductByCategoryName = async (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const skip = (page - 1) * limit;
  const sorted = parseInt(req.query.sort);

  try {
    const totalProducts = await Product.countDocuments({ categoryName: req.params.categoryName });
    const totalPages = Math.ceil(totalProducts / limit)

    const products = await Product.find({ categoryName: req.params.categoryName }).skip(skip).limit(limit).sort({ price: sorted });
    res.status(200).json({ products, page, limit, totalPages, totalProducts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { getProductByCategoryName }
