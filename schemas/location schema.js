const connection=require("../connection");

connection.query('create table locations(location varchar(50),pincode varchar(10),PRIMARY KEY(location,pincode))',(err,results)=>{
    if(err)console.log(err);
    else console.log(results);
})