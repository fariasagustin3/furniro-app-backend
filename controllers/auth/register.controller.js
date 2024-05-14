const User = require("../../models/User")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });
    
    const userSaved = await newUser.save()
    res.status(200).json(userSaved)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }

}

module.exports = { register }
