const User = require("../models/user");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
module.exports.get_login = (req, res) => {
  res.render("login");
};
const create_token = (id) => {
  return jwt.sign({ id }, "sourabh", {
    expiresIn: 86400, // expires in 24 hours
  });
};
module.exports.post_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    await bcrypt.compare(password, user.password).then((auth) => {
      if (auth) {
        var token = create_token(user._id);
        res.cookie("jwt", token, {
        //   httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ user: user._id });
      } else {
        res.json("wrong email or password");
      }
    });
  } catch (err) {
    res.send(err);
  }
};
module.exports.get_signup = (req, res) => {
  res.render("form");
};
module.exports.post_signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    var token = create_token(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.json(err);
  }
};
module.exports.game = (req, res) => {
  res.render("index1");
};
