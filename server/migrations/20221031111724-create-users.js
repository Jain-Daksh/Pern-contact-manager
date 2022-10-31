'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(20)
      },
      email: {
        type: Sequelize.STRING(40)
      },
      age: {
        type: Sequelize.INTEGER(3)
      },
      mobile: {
        type: Sequelize.STRING(13)
      },
      type: {
        type: Sequelize.STRING(10)
      },
      address: {
        type: Sequelize.STRING(75)
      },
      desc: {
        type: Sequelize.STRING(30)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};