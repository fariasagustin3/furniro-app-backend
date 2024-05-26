const Product = require("../../models/Product");

const getAllProducts = async (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const skip = (page - 1) * limit;
  const sorted = parseInt(req.query.sort);
  const filter = req?.query?.filter;
  const search = req?.query?.search;

  try {
    console.log(filter, search)
    
    if(filter) {
      const totalProducts = await Product.countDocuments({ categoryName: filter, title: { $regex: req?.query?.search, $options: "i" } });
      const totalPages = Math.ceil(totalProducts / limit)
      const products = await Product.find({ categoryName: filter, title: { $regex: search, $options: "i" } }).skip(skip).limit(limit).sort({ price: sorted });
      return res.status(200).json({ products, page, limit, totalPages, totalProducts })
    } else {
      const totalProducts = await Product.countDocuments({ title: { $regex: req?.query?.search, $options: "i" } });
      const totalPages = Math.ceil(totalProducts / limit)
      const products = await Product.find({ title: { $regex: search, $options: "i" } }).skip(skip).limit(limit).sort({ price: sorted });
      return res.status(200).json({ products, page, limit, totalPages, totalProducts })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { getAllProducts }
