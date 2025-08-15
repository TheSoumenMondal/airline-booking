const express = require("express");
const { cityRouter } = require("./cityRouter");

const v1Router = express.Router();

v1Router.use("/city", cityRouter);

module.exports = {
  v1Router,
};
