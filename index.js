const express = require("express");
const cors = require("cors");
const { config } = require("dotenv")
const { connectDB } = require("./database/dbConnection");
const authRoute = require("./routes/auth")
const categoriesRoute = require("./routes/categories");
const productsRoute = require("./routes/products");
const ordersRoute = require("./routes/orders");

const app = express();
config();

app.use(cors())
app.use(express.json())

app.use("/auth", authRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productsRoute);
app.use("/orders", ordersRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK "})
})


app.listen(process.env.PORT, () => {
  console.log("Server running!");
  connectDB()
})