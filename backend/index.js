const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/send', require('./routes/contactRouter'));

app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/JM_Wellness',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error(err);
  });

  app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  });
