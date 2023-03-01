require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = ` DROP TABLE IF EXISTS categories; DROP TABLE IF EXISTS experiences; DROP TABLE IF EXISTS cart;
  
  CREATE TABLE categories (
    category VARCHAR(20) NOT NULL,
    id INTEGER NOT NULL PRIMARY KEY
  ); 
  
  
  
  CREATE TABLE experiences (
      id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT, 
      experience VARCHAR(50) NOT NULL, 
      info VARCHAR(2000) NOT NULL,
      img VARCHAR(1000) NOT NULL,
      categoryID INT NOT NULL,
      amount INT NOT NULL
  );`;


  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table and database creation was successful!");

    console.log("Closing...");
  });

  

   // with the package fs this will preload the experiences table from the experiences.sql
   let sqlLoad = fs.readFileSync(__dirname + '/experiences.sql').toString();
   con.query(sqlLoad, function(err, result) {
     if (err) throw err;
     console.log("Loading experiences was successful!");
 
     console.log("Closing...");
   });

   con.end();
});


