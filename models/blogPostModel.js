const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  body: {
    type: [String],
    required: true
  },
  tags: [String]
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
