const Category = require("../../models/Category");

const getSingleCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.params.categoryName });
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { getSingleCategory }
