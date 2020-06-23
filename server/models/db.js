// const mysql = require("mysql");
var sql = require("mssql");
const dbConfig = require("../config/db.config.js");


// config for your database
var config = {
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  server: dbConfig.HOST, 
  database: dbConfig.DB
};

// connect to your database

sql.connect(config, function (err) {
    
  if (err) {console.log(err);}
  else{
    console.log('connect server successfully');
  }
});

module.exports = sql;