const express = require("express");
const {
  createCity,
  getCity,
  updateCity,
  deleteCity,
  getAllCities,
} = require("../../controllers/cityController");
const cityRouter = express.Router();

cityRouter.post("/", createCity);
cityRouter.get("/:id", getCity);
cityRouter.put("/:id", updateCity);
cityRouter.delete("/:id", deleteCity);
cityRouter.get("/", getAllCities);

module.exports = {
  cityRouter,
};
