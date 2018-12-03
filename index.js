const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 8081;

const connection = mysql.createConnection({
  host: "task-db.clmqh9nyjmbn.us-west-2.rds.amazonaws.com",
  user: "root",
  database: "taskdb",
  password: "anandapoudel"
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
  console.log(studentNumber);
  res.json({ studentNumber });
});

app.listen(port, () => console.log(`task listening on port ${port}!`));
