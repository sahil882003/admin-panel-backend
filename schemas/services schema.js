const connection=require("../connection");

connection.query('create table services(id int AUTO_INCREMENT PRIMARY KEY,name varchar(50) NOT NULL)',(err,results)=>{
    if(err)console.log(err);
    else console.log(results);
});