const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) =>
  res.send("Ashish, elastic beanstalk is finally working")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
