const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerID: String,
  customerName: String,
  customerMobile: String,
  customerAddress: String,
});

module.exports = mongoose.model("Customer", customerSchema);
