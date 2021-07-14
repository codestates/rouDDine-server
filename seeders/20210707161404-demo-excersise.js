'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exercises', [
    {
      userid: 1,
      category: "유산소운동",
      name: "싸이클",
      set_time: 30,
      rest_time: 5,
      memo: "내일도 오늘만큼!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "스쿼트",
      set_time: 10,
      rest_time: 5,
      memo: "내일도 활기차게!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "푸쉬업",
      set_time: 3,
      rest_time: 5,
      memo: "내일은 70개 채우자",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "줄넘기",
      set_time: 30,
      rest_time: 5,
      memo: "내일도 빡쎄게!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "위밍업 체조",
      name: "나만의 운동",
      set_time: 20,
      rest_time: 5,
      memo: "부상방지!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "휴식(물마시기)",
      set_time: 10,
      rest_time: 5,
      memo: "목말라..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "휴식(단백질 쉐이크)",
      set_time: 10,
      rest_time: 5,
      memo: "단백질이 필요해..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      category: "웨이트운동",
      name: "윗몸일으키기",
      set_time: 2,
      rest_time: 5,
      memo: "2분에 60개.. 내일은 조금만더..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      category: "웨이트운동",
      name: "풀업",
      set_time: 3,
      rest_time: 5,
      memo: "헬린이 탈출 화이팅!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      category: "웨이트운동",
      name: "푸쉬업",
      set_time: 2,
      rest_time: 5,
      memo: "현재 50개 .. 헬린이 탈출 화이팅!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      category: "유산소운동",
      name: "달리기",
      set_time: 30,
      rest_time: 5,
      memo: "힘들다..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      category: "유산소운동",
      name: "계단오르기",
      set_time: 20,
      rest_time: 5,
      memo: "힘들다..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      category: "휴식",
      name: "휴식(물마시기)",
      set_time: 20,
      rest_time: 5,
      memo: "목말라..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "나만의운동",
      name: "스트레칭",
      set_time: 30,
      rest_time: 5,
      memo: "오늘은 어제보다 더 유연해졌다.",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "나만의운동",
      name: "훌라후프",
      set_time: 10,
      rest_time: 5,
      memo: "뱃살 빼자!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "웨이트운동",
      name: "풀업",
      set_time: 1,
      rest_time: 5,
      memo: "오늘 처음으로 철봉 1개 성공!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "유산소운동",
      name: "계단오르기",
      set_time: 15,
      rest_time: 5,
      memo: "휴.. 힘들다...",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "유산소운동",
      name: "런지",
      set_time: 20,
      rest_time: 5,
      memo: "휴....",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "휴식",
      name: "휴식(간식)",
      set_time: 20,
      rest_time: 5,
      memo: "간식 땡기네..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      category: "유산소운동",
      name: "댄스",
      set_time: 30,
      rest_time: 10,
      memo: "몸매관리, 다이어트",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      category: "유산소운동",
      name: "싸이클",
      set_time: 30,
      rest_time: 15,
      memo: "죽겠다....",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      category: "나만의운동",
      name: "롤러스케이트",
      set_time: 30,
      rest_time: 15,
      memo: "신난다!",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      category: "나만의운동",
      name: "발차기",
      set_time: 15,
      rest_time: 10,
      memo: "힘들어..",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      category: "휴식",
      name: "휴식(앉아있기)",
      set_time: 20,
      rest_time: 5,
      memo: "휴...",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      category: "휴식",
      name: "휴식(긴식)",
      set_time: 20,
      rest_time: 5,
      memo: "맛있다",
      default: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};
