const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.post("/signup", (req, res, next) => {
  User.findOne({username: req.body.username}, (err, existingUser) => {
    if (err) {
      res.status(500);
      return next(err);
    } else if (existingUser !== null) {
      res.status(400);
      return next(new Error("That username already exists."));
    };
    const newUser = new User(req.body);
    newUser.save((err, user, next) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.status(201).send({user: user.withoutPassword(), token: token})
    });
  });
});

authRouter.post("/login", (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    } else if (!user) {
      res.status(403);
      return next(new Error("Username and/or password is incorrect"));
    };

    user.checkPassword(req.body.password, (err, match, next) => {
      if (err) {
        res.status(500);
        return next(err);
      } else if (!match) {
        res.status(401);
        return next(new Error("Username and/or password is incorrect"));
      };
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.send({token: token, user: user.withoutPassword(), success: true});
    });
  });
});

module.exports = authRouter;
