const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/customerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/customers", customerRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
