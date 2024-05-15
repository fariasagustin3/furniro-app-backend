const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database/dbConnection");
const authRoute = require("./routes/auth")
const categoriesRoute = require("./routes/categories");
const productsRoute = require("./routes/products");

const app = express();

app.use(cors())
app.use(express.json())

app.use("/auth", authRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productsRoute);


app.get("/ready", (req, res) => {
  res.status(200).json({ message: "OK "})
})


app.listen(3001, () => {
  console.log("Server running on port 3001");
  connectDB()
})