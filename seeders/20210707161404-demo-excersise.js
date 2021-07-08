'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exercises', [
    {
      userid: 1,
      name: "테스트1",
      set_time: 12,
      rest_time: 5,
      memo: "3대 500! 언더아머 단속반..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      name: "테스트2",
      set_time: 10,
      rest_time: 10,
      memo: "헬린이...",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      name: "테스트3",
      set_time: 9,
      rest_time: 10,
      memo: "뱃살 빼자!!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      name: "테스트4",
      set_time: 12,
      rest_time: 8,
      memo: "몸매관리, 다이어트",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};