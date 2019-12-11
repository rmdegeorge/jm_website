const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Class', classSchema);
