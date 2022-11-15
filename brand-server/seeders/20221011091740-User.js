"use strict";
const { hashPassword } = require("../helpers/bcrypt");

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
    const dateNow = new Date();
    await queryInterface.bulkInsert("Users", [
      {
        username: "reyhan",
        email: "reyhan@gmail.com",
        password: hashPassword("12345"),
        role: "admin",
        phoneNumber: "082445643879",
        address: "Jakarta",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        username: "william",
        email: "william@gmail.com",
        password: hashPassword("12345"),
        role: "customer",
        phoneNumber: "082445643564",
        address: "Bandung",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
