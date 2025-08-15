const express = require("express");
const {
  createCity,
  getCity,
  updateCity,
  deleteCity,
} = require("../../controllers/cityController");
const cityRouter = express.Router();

cityRouter.post("/", createCity);
cityRouter.get("/:id", getCity);
cityRouter.put("/:id", updateCity);
cityRouter.delete("/:id", deleteCity);

module.exports = {
  cityRouter,
};
