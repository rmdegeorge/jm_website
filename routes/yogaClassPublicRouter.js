const express = require("express");
const YogaClass = require("../models/yogaClassModel");
const yogaClassRouter = express.Router();

yogaClassRouter
  .route("/")
  // get all yogaClasses
  .get((req, res, next) => {
    YogaClass.find((err, yogaClasses) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(yogaClasses);
    });
  });

yogaClassRouter
  .route("/:_id")
  // get one yogaClass
  .get((req, res, next) => {
    YogaClass.findById(req.params._id, (err, yogaClass) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(yogaClass);
    });
  });

module.exports = yogaClassRouter;
