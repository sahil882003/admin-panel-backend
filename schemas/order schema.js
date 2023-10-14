const connection=require("../connection");

connection.query('create table orders(id int AUTO_INCREMENT PRIMARY KEY,status bit DEFAULT 0,product_id int NOT NULL,customer_id int NOT NULL,technician_id int NOT NULL,service_id int NOT NULL,slot varchar(50) NOT NULL,order_date date NOT NULL,FOREIGN KEY(customer_id) REFERENCES customers(id),FOREIGN KEY(technician_id) REFERENCES technicians(id),FOREIGN KEY(service_id) REFERENCES services(id),FOREIGN KEY(product_id) REFERENCES products(id))',(err,results)=>{
    if(err)console.log(err);
    else console.log(results);
})