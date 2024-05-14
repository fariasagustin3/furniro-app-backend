const { login } = require("../controllers/auth/login.controller");
const { register } = require("../controllers/auth/register.controller");

const router = require("express").Router();

// login
router.post("/login", login)

// register
router.post("/register", register)

module.exports = router