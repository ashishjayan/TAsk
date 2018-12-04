const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = 8081;
app.use(bodyParser.json());
var connection = mysql.createConnection({
  host: "35.193.222.192",
  port: 3306,
  user: "root",
  password: "omariscool",
  database: "taskdb"
});
app.post("/echo", function(req, res) {
  console.log("ashish");
  console.log(req.body);
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
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
  res.send(studentNumber[0][0]);
});

app.listen(port, () => console.log(`task listening on port ${port}!`));
