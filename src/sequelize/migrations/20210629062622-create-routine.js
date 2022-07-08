'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('routines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.STRING
      },
      finished_time: {
        type: Sequelize.INTEGER
      },
      total_time: {
        type: Sequelize.INTEGER
      },
      finished_total_time: {
        type: Sequelize.INTEGER
      },
      share: {
        type: Sequelize.BOOLEAN
      },
      default: {
        type: Sequelize.BOOLEAN
      },
      routineimage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('routines');
  }
};
