const express = require('express');
const BlogPost = require('../models/blogPostModel');
const blogPostRouter = express.Router();

blogPostRouter.route('/')
  // get all blogPosts
  .get((req, res, next) => {
    BlogPost.find((err, blogPosts) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      return res.status(200).send(blogPosts);
    });
  })
  // post new blogPost
  .post((req, res, next) => {
    newBlogPost = new BlogPost(req.body);
    newBlogPost.save((err, blogPost) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      return res.status(201).send(blogPost);
    });
  });

blogPostRouter.route('/:_id')
  // get one blogPost
  .get((req, res, next) => {
    BlogPost.findById(req.params._id, (err, blogPost) => {
      if (err) {
        res.status(500);
        return next(err);
      };
      return res.status(200).send(blogPost);
    })
  })
  // put (update) one blogPost
  .put((req, res, next) => {
    BlogPost.findOneAndUpdate(
      {_id: req.params._id},
      req.body,
      {new: true},
      (err, blogPost) => {
        if (err) {
          res.status(500);
          return next(err);
        };
        return res.status(200).send(blogPost)
      }
    );
  })
  // delete one blogPost
  .delete((req, res, next) => {
    BlogPost.findOneAndDelete(
      {_id: req.params._id},
      (err, blogPost) => {
        if (err) {
          res.status(500);
          return next(err);
        };
        return res.status(200).send(blogPost);
      }
    );
  });
  
module.exports = blogPostRouter;
