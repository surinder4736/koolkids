const express = require('express');
const router = express.Router();

const customers = require("../controllers/customer.controller.js");
  
// Create a new Customer
router.post("/add", customers.create);
  
// Retrieve all Customers
router.get("/getlist", customers.findAll);

  
module.exports = router;