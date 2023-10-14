const express=require("express");
const app=express();
require("dotenv").config();




app.listen("4000",()=>{
   console.log("Server is on and running on port 4000");
});
