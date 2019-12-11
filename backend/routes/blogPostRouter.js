const express = require('express');
const BlogPost = require('../models/blogPostModel');
const blogPostRouter = express.Router();

blogPostRouter.route('/')
  .get((req, res) => {
    BlogPost.find((err, blogPosts) => {

    })
  })
  .post((req, res) => {
    BlogPost.save((err, blogPost) => {
      
    })
  })
blogPostRouter.route('/:_id')

module.exports = blogPostRouter;
