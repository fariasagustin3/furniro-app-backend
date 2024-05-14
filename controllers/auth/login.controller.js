const User = require("../../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
      return res.status(404).json("User not found")
    } else {
      bcrypt.compare(req.body.password, user.password, async (err, result) => {
        if(err) {
          return res.status(401).json("Password incorrect")
        } else {
          const token = await jwt.sign({ email: user.email, isAdmin: user.isAdmin }, process.env.SECRET_JWT)
          return res.status(200).json({ token });
        }
      })
    }
  } catch(err) {
    console.log(err);
    res.status(500).json(err)
  }
}

module.exports = { login }
