const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);

  const user = new User({ email, password: hash });
  user.save((err) => {
    if (err) {
      return res.status(400).json({
        err: "email already exists",
      });
    }
    res.json({
      message: "Registration successful",
    });
  });
};
exports.login = (req, res) => {
  const { email, password } = req.body;

    User.findOne
    ({ email
    }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User does not exist. Please register.",
      });
    }
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({
            err: "Email and password do not match",
        });
        }
        const token = jwt.sign({ _id: user._id }, 'fxmedia');
        res.cookie("jwt", token, { expire: new Date() + 9999 });
        const { _id, email } = user;
        return res.json({ token, user: { _id, email } });
    });
};
exports.logout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/login");
};
