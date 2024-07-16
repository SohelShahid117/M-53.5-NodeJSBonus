const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/data", (req, res) => {
  res.send("more data coming sooooooooooooon");
});

app.listen(port, () => {
  console.log(`my first server listening on port ${port}`);
  console.log(`server is running at http://localhost:${port}`);
});
