const { Op } = require("sequelize");
const { City } = require("../../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity({ id }) {
    try {
      const result = await City.destroy({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      throw { error };
    }
  }

  async getCity({ cityId }) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      await City.update(data, {
        where: {
          id: cityId,
        },
      });
      const updatedCity = await City.findByPk(cityId);
      return updatedCity;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
