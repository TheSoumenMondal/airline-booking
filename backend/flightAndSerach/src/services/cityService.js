const {CityRepository} = require("../repository/index")


class CityService{
    constructor(CityRepository){
        this.CityRepository = new CityRepository()
    }

    async createCity({name}){
        try {
            const city = await this.CityRepository.createCity({ name });
            return city;
        } catch (error) {
            throw error;
        }
    }

    async deleteCity({id}) {
        try {
            const response = await this.CityRepository.deleteCity({ id });
            return response
        } catch (error) {
            throw error
        }
    }
    async getCity({cityId}) {
        try {
            const city = await this.CityRepository.getCity({ cityId });
            return city;
        } catch (error) {
            throw error;
        }
    }
    async updateCity(cityId , data){
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = CityService;