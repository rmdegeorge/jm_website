const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.post("/login", (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    } else if (!user) {
      res.status(403);
      return next(new Error("Username and/or password is incorrect"));
    };

    user.checkPassword(req.body.password, (err, match) => {
      if (err) {
        return res.status(500).send(err);
      } else if (!match) {
        return res.status(401).send({success: false, message: "Username and/or password is incorrect"});
      };
      const token = jwt.sign(suer.withoutPassword(), process.env.SECRET);
      return res.send({token: token, user: user.withoutPssword(), success: true});
    });
  });
});

module.exports = authRouter;
