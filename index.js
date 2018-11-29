const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) =>
  res.json({
    project: "task-api",
    message: "Welcome! to our new LMS",
    time: Date.now()
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
