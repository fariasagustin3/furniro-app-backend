const Category = require("../../models/Category");

const editCategory = async (req, res) => {
  try {
    const categoryEdited = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json(categoryEdited);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { editCategory }
