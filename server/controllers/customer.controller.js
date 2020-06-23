const Customer = require("../models/customer.model.js");

exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const customer = new Customer({
      name: req.body.name,
      school: req.body.school,
      age: req.body.age,
      answer1:req.body.answer1,
      answer2:req.body.answer2,
      answer3:req.body.answer3,
      user_address:req.body.user_address,
      contact:req.body.contact
    });
    console.log(req.body.name);
    console.log(req.body.school);
    console.log(req.body.age);
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };