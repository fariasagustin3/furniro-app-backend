const Product = require("../../models/Product");

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const sort = parseInt(req.query.sort) || -1; // Default to descending order
  const filter = req.query.filter;
  const search = req.query.search;

  const query = {};

  if (filter) {
    query.categoryName = filter;
  }

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  try {
    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ price: sort });

    return res.status(200).json({
      products,
      page,
      limit,
      totalPages,
      totalProducts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllProducts };