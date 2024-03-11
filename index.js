const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/customerDB");
const db = mongoose.connection;
db.on("co", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to database :: Mongodb");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(customerRoutes);

app.get("/", (req, res) => res.send("hello world"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
