'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.STRING
      },
      routine_id: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      set_number: {
      	type: Sequelize.INTEGER
      },
      set_time_min: {
        type: Sequelize.INTEGER
      },
      set_time_sec: {
        type: Sequelize.INTEGER
      },
      rest_time_min: {
        type: Sequelize.INTEGER
      },
      rest_time_sec: {
        type: Sequelize.INTEGER
      },
      memo: {
        type: Sequelize.STRING
      },
      default: {
        type: Sequelize.BOOLEAN
      },
      workoutimage: {
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
    await queryInterface.dropTable('exercises');
  }
};
