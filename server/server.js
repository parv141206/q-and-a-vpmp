const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ang",
});
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({ message: "This is some crazy data" });
});
app.post("/fur", (req, res) => {
  const { name, price } = req.body;
  const query = `INSERT INTO fur VALUES('${name}' , ${price});`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(`Error occurd ${err}`);
    } else {
      res.json({ message: "Record inserted" });
    }
  });
});
app.post("/emp", (req, res) => {
  const { name, salary } = req.body;
  const query = `INSERT INTO emp VALUES('${name}' , ${salary});`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(`Error occurd ${err}`);
    } else {
      res.json({ message: "Record inserted" });
    }
  });
});
app.post("/stud", (req, res) => {
  const { name, roll } = req.body;
  const query = `INSERT INTO stud VALUES('${name}' , ${roll});`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(`Error occurd ${err}`);
    } else {
      res.json({ message: "Record inserted" });
    }
  });
});
app.listen(5000, () => console.log(`listening on http://localhost:5000`));
