const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.post("/createCustomer", customerController.createCustomer);
router.get("/:customerId", customerController.getCustomerById);
router.put("/:customerId", customerController.updateCustomerById);
router.delete("/:customerId", customerController.deleteCustomerById);

module.exports = router;
