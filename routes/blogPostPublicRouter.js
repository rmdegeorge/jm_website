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
  });

module.exports = blogPostRouter;
