const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "hello worlddddddddddddddddddddd.I enjoy express js.which is server side language.My Phones server is coming soooooooon"
  );
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

//10 min--53_5-2 Create Get All Data Api And Single Phone Api
app.get("/phones:id", (req, res) => {
  const id = req.params.id;
  console.log("i have request id ", id);
  // res.send(phones);
});
app.listen(port, () => {
  console.log(`server is running at http:localhost:${port}`);
});
