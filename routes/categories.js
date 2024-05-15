const { createCategory } = require("../controllers/categories/createCategory.controller");
const { editCategory } = require("../controllers/categories/editCategory");
const { getAllCategories } = require("../controllers/categories/getAllCategories.controller");
const { getSingleCategory } = require("../controllers/categories/getSingleCategory.controller");

const router = require("express").Router();

// get all categories
router.get("/list", getAllCategories);

// create category
router.post("/create", createCategory);

// edit category
router.put("/:id/edit", editCategory);

// get a single category
router.get("/:categoryName/category", getSingleCategory);

module.exports = router
