'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('routines', [
    {
      name: "상체조지기",
      userid: 1,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "순한맛으로 조지기",
      userid: 2,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "유산소 위주로",
      userid: 3,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "몸매관리!",
      userid: 4,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('routines', null, {});
  }
};
