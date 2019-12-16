const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yogaClassSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  body: {
    type: [String], // each paragraph will be an item in the array. front end will need to split paragraphs at line returns.
    required: true
  },
  imgSrc: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("YogaClass", yogaClassSchema);
