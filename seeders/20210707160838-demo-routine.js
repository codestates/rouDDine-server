'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('routines', [
    {
      name: "상체 뿌시기 루틴",
      userid: 1,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "하체 조지기 루틴",
      userid: 1,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "머슬마니아 참가자 루틴",
      userid: 1,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "순한맛 루틴",
      userid: 2,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "헬린이 루틴",
      userid: 2,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "유산소 위주 루틴",
      userid: 3,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "급찐,급빠 루틴",
      userid: 3,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "언니들 몸매관리 루틴",
      userid: 4,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "칼.소.폭 루틴",
      userid: 4,
      finished_time: 0,
      share: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "바캉스 여름 루틴",
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