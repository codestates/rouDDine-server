'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exercises', [
    {
      userid: 1,
      name: "벤치프레스",
      set_time: 10,
      rest_time: 5,
      memo: " 내일 145키로 도전! ",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      name: "스쿼트",
      set_time: 10,
      rest_time: 5,
      memo: "내일 165키로 도전!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      name: "데드리프트",
      set_time: 10,
      rest_time: 5,
      memo: "내일 190키로 도전!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      name: "윗몸일으키기",
      set_time: 2,
      rest_time: 5,
      memo: "2분에 60개.. 내일은 조금만더..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      name: "플랭크",
      set_time: 2,
      rest_time: 5,
      memo: "헬린이 탈출 화이팅!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      name: "푸쉬업",
      set_time: 2,
      rest_time: 5,
      memo: "현재 50개 .. 헬린이 탈출 화이팅!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      name: "요가",
      set_time: 30,
      rest_time: 5,
      memo: "오늘은 어제보다 더 유연해졌다.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      name: "데드버그",
      set_time: 10,
      rest_time: 5,
      memo: "코어운동!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      name: "풀업",
      set_time: 1,
      rest_time: 5,
      memo: "오늘 처음으로 철봉 1개 성공!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      name: "에어로빅",
      set_time: 30,
      rest_time: 10,
      memo: "몸매관리, 다이어트",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      name: "스피닝",
      set_time: 30,
      rest_time: 15,
      memo: "죽겠다....",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};