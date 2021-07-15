'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exercises', [
    {
        userid: 1,
        category: "웨이트운동",
        name: "스쿼트",
        set_time: 10,
        rest_time: 5,
        memo: "내일도 활기차게!",
        default: 1,
        workoutimage: 'Exercise/046-fitness.png',
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
        workoutimage: 'Exercise/022-push-up.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "싸이클",
      set_time: 30,
      rest_time: 5,
      memo: "내일도 오늘만큼!",
      default: 1,
      workoutimage: 'Exercise/039-cycling.png',
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
      workoutimage: 'Exercise/50-jumping-rope.png',
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
      workoutimage: 'Rest/05-water.png',
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
      workoutimage: 'Rest/03-protein.png',
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
      workoutimage: 'Exercise/043-fitness-1.png',
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
      workoutimage: 'Exercise/021-fitness-4.png',
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
      workoutimage: 'Exercise/018-running.png',
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
      workoutimage: 'Exercise/038-climbing-stairs.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 2,
      category: "휴식",
      name: "체중계 재보기",
      set_time: 5,
      rest_time: 0,
      memo: "...흠...",
      default: 1,
      workoutimage: 'Exercise/08-scale.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "웨이트운동",
      name: "데드버그",
      set_time: 10,
      rest_time: 5,
      memo: "뱃살 빼자!",
      default: 1,
      workoutimage: 'Exercise/030-yoga-2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "웨이트운동",
      name: "철봉 메달리기",
      set_time: 10,
      rest_time: 5,
      memo: "내일은 좀만더 버텨보자",
      default: 1,
      workoutimage: 'Exercise/021-fitness-2.png',
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
      workoutimage: 'Exercise/038-climbing-stairs.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "유산소운동",
      name: "점핑",
      set_time: 20,
      rest_time: 5,
      memo: "휴....",
      default: 1,
      workoutimage: 'Exercise/031-jumping.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "휴식",
      name: "휴식(사과)",
      set_time: 20,
      rest_time: 5,
      memo: "사과는 맛있어..",
      default: 1,
      workoutimage: 'Rest/09-food.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3,
      category: "휴식",
      name: "휴대폰 보기",
      set_time: 20,
      rest_time: 5,
      memo: "오호 재밋군...",
      default: 1,
      workoutimage: 'Rest/04-smartphone.png',
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
      workoutimage: 'Exercise/019-dancing.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    {
      userid: 4,
      category: "웨이트운동",
      name: "짐볼",
      set_time: 30,
      rest_time: 10,
      memo: "쑤신다.. ",
      default: 1,
      workoutimage: 'Exercise/031-exercise-ball.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 4,
      category: "휴식",
      name: "누워있기",
      set_time: 20,
      rest_time: 5,
      memo: "휴...",
      default: 1,
      workoutimage: 'Rest/07-lyingdown.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 5,
      routine_id: 11,
      category: "웨이트운동",
      name: "벤치프레스",
      set_time: 30,
      set_number:4,
      rest_time: 240,
      memo: "팔꿈치가 어깨쪽으로 올라가거나 옆구리 쪽으로 떨어지는 것을 주의! 1세트당 12~15, 휴식시간 4분",
      default: 1,
      order:1,
      workoutimage: 'Excerise/051-bench-press.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 5,
      routine_id: 11,
      category: "유산소운동",
      name: "테니스",
      set_time: 45,
      set_number:4,
      rest_time: 180,
      memo: "허리를 너무 아치로 만들지 말고 1자로 유지! 1세트당 12~15회, 휴식시간 3분",
      default: 1,
      order:3,
      workoutimage: 'Excerise/040-tennis.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 5,
      routine_id: 11,
      category: "휴식",
      name: "휴식",
      set_time: 180,
      set_number:1,
      rest_time: 0,
      memo: "운동사이 휴식 3분",
      default: 1,
      order:4,
      workoutimage: 'Rest/08-pulse.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};
