const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const path = require("path");
const expressJwt = require("express-jwt");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use('/send', require('./routes/contactRouter'));
app.use('/api', expressJwt({secret: process.env.SECRET}));
app.use('/auth', require('./routes/authRouter'));
app.use(express.static(path.join(__dirname, "client", "build")));
// error handling middleware
app.use((err,req,res,next) => {
  if (err.name === "UnautorizedError") {
    res.status(err.status)
  }
  console.error(err);
  return res.send({errMsg: err.message});
});

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/JM_Wellness',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
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
