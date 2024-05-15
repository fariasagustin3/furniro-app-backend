const { createProduct } = require("../controllers/products/createProduct.controller");
const { editProduct } = require("../controllers/products/editProduct.controller");
const { getAllProducts } = require("../controllers/products/getAllProducts.controller");
const { getProductByCategoryName } = require("../controllers/products/getProductByCategoryName.controller");
const { getTrendingProducts } = require("../controllers/products/getTrendingProducts.controllers");

const router = require("express").Router();

// create a product
router.post("/create", createProduct);

// get products by category name
router.get("/:categoryName/list", getProductByCategoryName);

// get all products
router.get("/list", getAllProducts);

// edit product
router.put("/:id/edit", editProduct);

// get trending products
router.get("/trending", getTrendingProducts);

module.exports = router