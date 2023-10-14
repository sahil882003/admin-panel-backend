const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
    host:"localhost",//process.env.MYSQLHOST,
    user:"root",// process.env.MYSQLUSER,  // Replace with your actual username
    password: "",//process.env.MYSQLPASSWORD,  // Replace with your actual password
    database:"matric_db",//process.env.DATABASE,  // Replace with your actual database name
  connectTimeout:60000
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });


  module.exports=connection;