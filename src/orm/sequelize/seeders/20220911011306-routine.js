'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('routines', [
    {
      name: "맨몸 홈트 루틴 - 복근",
      userid: 1,
      finished_time: 0,
      share: true,
      default: true,
      routineimage: 'Routine/009-abdominals.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "맨몸 홈트 루틴 - 전신",
      userid: 1,
      finished_time: 0,
      share: true,
      default: true,
      routineimage: 'Routine/022-exercise.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "바쁜 직장인 루틴",
      userid: 1,
      finished_time: 0,
      share: true,
      default: true,
      routineimage: 'Routine/011-report.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "헬린이 루틴",
      userid: 1,
      finished_time: 0,
      share: true,
      total_time: true,
      finished_total_time: 0,
      default: 1,
      routineimage: 'Routine/005-weight.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },	
    {
      name: "짧고,굵게 지옥 루틴",
      userid: 1,
      finished_time: 0,
      share: true,
      total_time: 0,
      finished_total_time: 0,
      default: true,
      routineimage: 'Routine/014-muscle.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "뱃살 폭파 루틴",
      userid: 1,
      finished_time: 0,
      share: true,
      default: true,
      routineimage: 'Routine/029-body-fat.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('routines', null, {});
  }
};