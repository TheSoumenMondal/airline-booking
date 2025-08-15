"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Indira Gandhi International Airport",
          address: "New Delhi, Delhi 110037, India",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Safdarjung Airport",
          address: "Safdarjung, New Delhi, Delhi 110003, India",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hindon Air Force Station",
          address: "Ghaziabad, Uttar Pradesh 201015, India",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Palam Airport",
          address: "Palam, New Delhi, Delhi 110010, India",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delhi Flying Club Airport",
          address: "Safdarjung, New Delhi, Delhi 110003, India",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Devi Ahilya Bai Holkar Airport",
          address: "Indore, Madhya Pradesh 452005, India",
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indore Domestic Airport",
          address: "Indore, Madhya Pradesh 452016, India",
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pithampur Airstrip",
          address: "Pithampur, Madhya Pradesh 454775, India",
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indore Flying Club",
          address: "Indore, Madhya Pradesh 452001, India",
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mhow Air Force Station",
          address: "Mhow, Madhya Pradesh 453441, India",
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airports', null, {});
  },
};
