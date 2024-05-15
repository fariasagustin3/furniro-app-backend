const Product = require("../../models/Product");

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const skip = (page - 1) * limit;
  const sorted = parseInt(req.query.sort);
  
  try {
    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / limit)

    const products = await Product.find().skip(skip).limit(limit).sort({ price: sorted });
    res.status(200).json({products, page, limit, totalPages, totalProducts})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { getAllProducts }
