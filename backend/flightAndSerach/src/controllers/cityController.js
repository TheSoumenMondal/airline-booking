const { CityService } = require("../services/index");

const cityService = new CityService();

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      success: true,
      data: city,
      message: "Successfully created a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {},
      message: "Failed to create a city",
      error: error,
    });
  }
};
const deleteCity = async (req, res) => {
  try {
    const city = await cityService.deleteCity({ id: req.params.id });
    return res.status(200).json({
      success: true,
      data: city,
      message: "Successfully deleted a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {},
      message: "Failed to delete a city",
      error: error.message,
    });
  }
};
const getCity = async (req, res) => {
  try {
    const city = await cityService.getCity({ cityId: req.params.id });
    return res.status(200).json({
      success: true,
      data: city,
      message: "Successfully fetched a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {},
      message: "Failed to fetch a city",
      error: error.message,
    });
  }
};
const updateCity = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      data: city,
      message: "Successfully updated a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {},
      message: "Failed to update a city",
      error: error.message,
    });
  }
};

module.exports = {
  createCity,
  deleteCity,
  getCity,
  updateCity,
};
