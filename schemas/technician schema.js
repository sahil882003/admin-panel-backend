const connection=require('../connection');

connection.query('create table Technicians(id int AUTO_INCREMENT PRIMARY KEY,name varchar(20) NOT NULL,phone varchar(10) NOT NULL UNIQUE ,email varchar(50) NOT NULL UNIQUE,aadhar varchar(20) NOT NULL UNIQUE)',(err,results)=>{
    if(err)console.log(err);
    else console.log(results);
});