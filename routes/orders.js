const { createOrder } = require("../controllers/orders/createOrder.controller");
const { getAllOrders } = require("../controllers/orders/getAllOrders.controller");

const router = require("express").Router()

// create order
router.post("/create", createOrder);

// get all orders
router.get("/list", getAllOrders);

module.exports = router;
