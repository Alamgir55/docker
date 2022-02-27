const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HOW YA OING");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
