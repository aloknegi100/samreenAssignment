const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
  try {
    const { customerID, customerName, customerMobile, customerAddress } =
      req.body;
    console.log("----", req.body);
    const newCustomer = new Customer({
      customerID,
      customerName,
      customerMobile,
      customerAddress,
    });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      customerID: req.params.customerId,
    });
    if (customer == null) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      customerID: req.params.customerId,
    });
    if (customer == null) {
      return res.status(404).json({ message: "Customer not found" });
    }
    if (req.body.customerID != null) {
      customer.customerID = req.body.customerID;
    }
    if (req.body.customerName != null) {
      customer.customerName = req.body.customerName;
    }
    if (req.body.customerMobile != null) {
      customer.customerMobile = req.body.customerMobile;
    }
    if (req.body.customerAddress != null) {
      customer.customerAddress = req.body.customerAddress;
    }
    await customer.save();
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      customerID: req.params.customerId,
    });
    if (customer == null) {
      return res.status(404).json({ message: "Customer not found" });
    }
    await customer.remove();
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.allCustomers = async (req, res) => {
  try {
    const cutomers = await Customer.find({});
    res.status(201).json(cutomers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
