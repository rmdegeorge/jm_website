const express = require('express');
const Class = require('../models/classModel');
const classRouter = express.Router();

classRouter.route('/')
  // get all classes
  .get((req, res, next) => {
    Class.find((err, classes) => {
      if (err) {
        res.status(500);
        return next(err)
      };
      return res.status(200).send(classes);
    });
  });
  // post new class
  .post((req, res, next) => {
    const newClass = new Class(req.body);
    newClass.save((err, class) => {
      if (err) {
        res.status(500)
        return next(err)
      };
      return res.status(201).send(class);
    });
  });

classRouter.route('/:_id')
  // get one class
  .get((req, res, next) => {
    Class.findById(req.params._id, (err, class) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      return res.status(200).send(class);
    });
  });
  // put (update) one class
  .put((req, res) => {
    Class.findOneAndUpdate(
      {_id: req.params._id},
      req.body,
      {new: true},
      (err, class) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(class);
      };
    );
  });
  // delete one class
  .delete((req, res) => {
    Class.findOneAndDelete(
      {_id: req.params._id},
      (err, class) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(class)
      };
    );
  });

module.exports = classRouter;
