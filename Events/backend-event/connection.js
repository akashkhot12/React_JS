const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "events-operations",
});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("connected successfully");
})

module.exports = connection;
