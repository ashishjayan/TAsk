const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 8081;

var connection = mysql.createConnection({
  host: "35.193.222.192",
  port: 3306,
  user: "root",
  password: "omariscool",
  database: "taskdb"
});
app.get("/", (req, res) =>
  res.json({
    project: "task-api",
    message: "Welcome! to our new LMS",
    time: Date.now()
  })
);

app.get("/student-grade", async (req, res) => {
  const className = req.query.className;
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const studentNumber = await connection
    .promise()
    .query(
      `select StudentNum from Student where FirstName = "Ananda" and LastName = "Poudel"`
    );
  console.log(studentNumber[0]);
  res.send(studentNumber[0][0].StudentNum);
});

app.listen(port, () => console.log(`task listening on port ${port}!`));
