const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database/dbConnection");
const authRoute = require("./routes/auth")

const app = express();

app.use(cors())
app.use(express.json())

app.use("/auth", authRoute);


app.listen(3001, () => {
  console.log("Server running on port 3001");
  connectDB()
})