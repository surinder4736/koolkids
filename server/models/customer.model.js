const sql = require("./db.js");

// constructor

const Customer = function(customer) {
    this.name= customer.name,
    this.school= customer.school,
    this.age= customer.age,
    this.answer1=customer.answer1,
    this.answer2=customer.answer2,
    this.answer3=customer.answer3,
    this.user_address=customer.user_address,
    this.contact=customer.contact
};


Customer.create = (newCustomer, result) => {
  console.log(newCustomer);
  console.log("INSERT INTO koolkidsklub (name,school,age,answer1,answer2,answer3,user_address,contact) values('"+newCustomer.name+"','"+newCustomer.school+"',"+newCustomer.age+",'"+newCustomer.answer1+"','"+newCustomer.answer2+"','"+newCustomer.answer3+"','"+newCustomer.user_address+"','"+newCustomer.contact+"'");
  try{
    sql.query("INSERT INTO koolkidsklub (name,school,age,answer1,answer2,answer3,user_address,contact) values('"+newCustomer.name+"','"+newCustomer.school+"','"+newCustomer.age+"','"+newCustomer.answer1+"','"+newCustomer.answer2+"','"+newCustomer.answer3+"','"+newCustomer.user_address+"','"+newCustomer.contact+"')", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log(res);
        console.log("created customer: ", { id: res.id, ...newCustomer });
        result(null, { id: res.id, ...newCustomer });
      });
  }
  catch(err){
      console.log(err);
      throw err;
  }  
  
};

Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM koolkidsklub", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("customers: ", res);
    result(null, res);
  });
};

Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Customer.remove = (id, result) => {
  sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Customer;