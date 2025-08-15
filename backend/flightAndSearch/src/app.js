const express = require("express");
const bodyParser = require("body-parser");
const { apiRouter } = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", apiRouter);

module.exports = app;
