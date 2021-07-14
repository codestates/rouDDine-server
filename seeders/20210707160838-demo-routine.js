'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('routines', [
    {
      name: "맨몸 운동 루틴",
      userid: 1,
      finished_time: 0,
      share: false,
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "전신 운동 루틴",
      userid: 1,
      finished_time: 0,
      share: false,
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "바쁜 직장인 루틴",
      userid: 1,
      finished_time: 0,
      share: false,
      default: 0,
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
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "유산소 위주 루틴",
      userid: 3,
      finished_time: 0,
      share: false,
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "급찐,급빠 루틴",
      userid: 3,
      finished_time: 0,
      share: false,
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "언니들 몸매관리 루틴",
      userid: 4,
      finished_time: 0,
      share: false,
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "칼.소.폭 루틴",
      userid: 4,
      finished_time: 0,
      share: false,
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "바캉스 여름 루틴",
      userid: 4,
      finished_time: 0,
      share: false,
      default: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "헬스초보자&바쁜직장인",
      userid: 5,
      finished_time: 0,
      share: true,
      total_time: 0,
      finished_total_time: 0,
      default: 1,
      routineimage: 'defaultroutine',
      createdAt: new Date(),
      updatedAt: new Date()
    },	
    {
      name: "짧고 굵게 지옥루틴",
      userid: 5,
      finished_time: 0,
      share: true,
      total_time: 0,
      finished_total_time: 0,
      default: 1,
      routineimage: 'defaultroutine',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('routines', null, {});
  }
};
