const express = require("express");
const fs = require("fs");
const app = express();

app.listen(8000, () => {
  console.log("Application is running");
});

app.get("/", (req, res) => {
  res.send("I ma on the Homepage");
  res.end();
});

app.get("/gallery", (req, res) => {
  res.send("I am on the Galley");
  res.end();
});
