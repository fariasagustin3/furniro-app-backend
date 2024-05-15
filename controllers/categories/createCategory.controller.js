const Category = require("../../models/Category");

const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

module.exports = { createCategory }
