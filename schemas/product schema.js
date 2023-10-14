const connection=require('../connection');

connection.query('create table Products(id int AUTO_INCREMENT PRIMARY KEY,name varchar(30) NOT NULL)',(err,results,feilds)=>{
    if(err)console.log(err);
    else
    {
        console.log(results);
        console.log(feilds);
    }
});