const connection=require("../connection");

connection.query('create table Brands(id int AUTO_INCREMENT PRIMARY KEY,name VARCHAR(30) NOT NULL)',(err,results,feilds)=>{
    if(err)console.log(err);
    else
    {
        console.log(results);
        console.log(feilds);
    }
});