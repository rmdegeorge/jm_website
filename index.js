const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const path = require("path");
const expressJwt = require("express-jwt");
const MongoClient = require("mongodb").MongoClient;
const fileUpload = require("express-fileupload");
const querystring = require("querystring");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

//********************************************
//***** Connecting to mongodb atlas here *****
//********************************************
//
//const uri = "mongodb+srv://" + querystring.escape(process.env.MONGODB_USERNAME) + ":" + querystring.escape(process.env.MONGODB_PASSWORD) + "@testcluster1.ptja5.mongodb.net/<dbname>?retryWrites=true&w=majority"
//MongoClient.connect(uri, function(err, client){
//	if(err) {
//		console.log('An error occurred while connecting to MongoDB Atlass...\n', err);
//	}
//	console.log('Connected to MongoDB...');
//	const collection = client.db("test").collection("devices");
//	// perform actions on the collection object
//	client.close();
//});
//
//********************************************

app.use(morgan("dev"));
app.use(express.json());
app.use(fileUpload());

// send email from contact form
//app.use("/send", require("./routes/contactRouter"));

// upload files
app.use("/upload", require("./routes/fileUploadRouter"));

// require token for routes starting with /admin
app.use("/admin", expressJwt({ secret: process.env.SECRET }));
app.use("/admin/yogaclass", require("./routes/yogaClassAdminRouter"));
app.use("/admin/blogpost", require("./routes/blogPostAdminRouter"));
app.use("/public/yogaclass", require("./routes/yogaClassPublicRouter"));
app.use("/public/blogpost", require("./routes/blogPostPublicRouter"));

app.use("/auth", require("./routes/authRouter"));
app.use(express.static(path.join(__dirname, "client", "build")));

// error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnautorizedError") {
    res.status(err.status);
  }
  console.error(err);
  return res.send({ errMsg: err.message });
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/JM_Wellness", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch(err => {
    console.error(err);
  });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
