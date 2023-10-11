const express=require("express");
const app=express();
const mysql = require('mysql2');
require("dotenv").config();


app.listen("4000",()=>{
   // console.log(connection);
   

const connection = mysql.createConnection({
  host:process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,  // Replace with your actual username
  password: process.env.MYSQLPASSWORD,  // Replace with your actual password
  //database: process.env.MYSQLDATABASE,  // Replace with your actual database name
connectTimeout:60000
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
    console.log("Server is on and running on port 4000");
})