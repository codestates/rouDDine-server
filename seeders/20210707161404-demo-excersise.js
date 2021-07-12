'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exercises', [
    {
      userid: 1,
      ex_id: 1,
      name: "벤치프레스",
      set_time: 10,
      rest_time: 5,
      memo: " 내일 145키로 도전! ",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      ex_id: 2,
      name: "스쿼트",
      set_time: 10,
      rest_time: 5,
      memo: "내일 165키로 도전!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      ex_id : 1,
      name: "데드리프트",
      set_time: 10,
      rest_time: 5,
      memo: "내일 190키로 도전!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      ex_id : 3,
      name: "휴식(물마시기)",
      set_time: 10,
      rest_time: 5,
      memo: "목말라..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      ex_id : 3,
      name: "휴식(단백질 쉐이크)",
      set_time: 10,
      rest_time: 5,
      memo: "단백질이 필요해..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      ex_id: 1,
      name: "윗몸일으키기",
      set_time: 2,
      rest_time: 5,
      memo: "2분에 60개.. 내일은 조금만더..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      ex_id: 2,
      name: "플랭크",
      set_time: 2,
      rest_time: 5,
      memo: "헬린이 탈출 화이팅!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      ex_id : 1,
      name: "푸쉬업",
      set_time: 2,
      rest_time: 5,
      memo: "현재 50개 .. 헬린이 탈출 화이팅!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      ex_id : 3,
      name: "휴식(앉아있기)",
      set_time: 20,
      rest_time: 5,
      memo: "힘들다..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      ex_id : 3,
      name: "휴식(물마시기)",
      set_time: 20,
      rest_time: 5,
      memo: "목말라..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      ex_id : 2,
      name: "요가",
      set_time: 30,
      rest_time: 5,
      memo: "오늘은 어제보다 더 유연해졌다.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      ex_id : 2,
      name: "데드버그",
      set_time: 10,
      rest_time: 5,
      memo: "코어운동!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      ex_id: 1,
      name: "풀업",
      set_time: 1,
      rest_time: 5,
      memo: "오늘 처음으로 철봉 1개 성공!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      ex_id : 3,
      name: "휴식(매트에 누워있기)",
      set_time: 20,
      rest_time: 5,
      memo: "휴....",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      ex_id : 3,
      name: "휴식(간식먹기)",
      set_time: 20,
      rest_time: 5,
      memo: "간식 땡기네..",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      ex_id: 2,
      name: "에어로빅",
      set_time: 30,
      rest_time: 10,
      memo: "몸매관리, 다이어트",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      ex_id: 2,
      name: "스피닝",
      set_time: 30,
      rest_time: 15,
      memo: "죽겠다....",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      ex_id : 3,
      name: "휴식(반신욕)",
      set_time: 20,
      rest_time: 5,
      memo: "휴...",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      ex_id : 3,
      name: "휴식(쥬스마시기)",
      set_time: 20,
      rest_time: 5,
      memo: "좋다..",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};