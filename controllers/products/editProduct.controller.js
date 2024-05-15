const Product = require("../../models/Product");

const editProduct = async (req, res) => {
  try {
    const productEdited = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json(productEdited);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { editProduct }
