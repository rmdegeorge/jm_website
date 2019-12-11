const express = require('express');
const YogaClass = require('../models/YogaClassModel');
const yogaClassRouter = express.Router();

yogaClassRouter.route('/')
  // get all yogaClasses
  .get((req, res, next) => {
    YogaClass.find((err, yogaClasses) => {
      if (err) {
        res.status(500);
        return next(err)
      };
      return res.status(200).send(yogaClasses);
    });
  })
  // post new yogaClass
  .post((req, res, next) => {
    const newYogaClass = new YogaClass(req.body);
    newYogaClass.save((err, yogaClass) => {
      if (err) {
        res.status(500)
        return next(err)
      };
      return res.status(201).send(yogaClass);
    });
  });

yogaClassRouter.route('/:_id')
  // get one yogaClass
  .get((req, res, next) => {
    YogaClass.findById(req.params._id, (err, yogaClass) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      return res.status(200).send(yogaClass);
    });
  })
  // put (update) one yogaClass
  .put((req, res, next) => {
    YogaClass.findOneAndUpdate(
      {_id: req.params._id},
      req.body,
      {new: true},
      (err, yogaClass) => {
        if (err) {
          res.status(500);
          return next(err)
        };
        return res.status(200).send(yogaClass);
      }
    );
  })
  // delete one yogaClass
  .delete((req, res, next) => {
    YogaClass.findOneAndDelete(
      {_id: req.params._id},
      (err, yogaClass) => {
        if (err) {
          res.status(500);
          return next(err);
        };
        return res.status(200).send(yogaClass)
      }
    );
  });

module.exports = yogaClassRouter;
