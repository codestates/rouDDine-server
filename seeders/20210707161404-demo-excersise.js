'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exercises', [
    {
        userid: 1,
        category: "웨이트운동",
        name: "벤치프레스",
        set_time_sec: 1,
        rest_time_sec: 5,
        memo: "내일도 활기차게!",
        default: 1,
        workoutimage: 'Exercise/051-bench-press.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userid: 1,
        category: "웨이트운동",
        name: "데드리프트",
        set_time_sec: 2,
        rest_time_min: 5,
        memo: "운동열심히",
        default: 1,
        workoutimage: 'Exercise/052-deadlift.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "푸쉬업",
      set_time_sec: 2,
      rest_time_sec: 5,
      memo: "운동열심히",
      default: 1,
      workoutimage: 'Exercise/022-push-up.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "벤트오버로우",
      set_time_sec: 3,
      rest_time_sec: 5,
      memo: "2분에 60개.. 내일은 조금만더..",
      default: 1,
      workoutimage: 'Exercise/053-bentoverlow.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "풀업",
      set_time_sec: 4,
      rest_time_sec: 5,
      memo: "헬린이 탈출 화이팅!",
      default: 1,
      workoutimage: 'Exercise/021-fitness-4.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "숄더프레스",
      set_time_sec: 5,
      rest_time_sec: 5,
      memo: "뱃살 빼자!",
      default: 1,
      workoutimage: 'Exercise/057-shoulderpress.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "스쿼트",
      set_time_sec: 6,
      rest_time_sec: 5,
      memo: "내일은 좀만더 버텨보자",
      default: 1,
      workoutimage: 'Exercise/054-squat.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "랫풀다운",
      set_time_sec: 7,
      rest_time_sec: 10,
      memo: "쑤신다.. ",
      default: 1,
      workoutimage: 'Exercise/056-latpulldown2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "웨이트운동",
      name: "바벨로우",
      set_time_sec: 8,
      rest_time_sec: 10,
      memo: "쑤신다.. ",
      default: 1,
      workoutimage: 'Exercise/058-barbellrow.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "싸이클",
      set_time_sec: 1,
      rest_time_sec: 5,
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
      set_time_sec: 2,
      rest_time_sec: 5,
      memo: "내일도 빡쎄게!",
      default: 1,
      workoutimage: 'Exercise/50-jumping-rope.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "달리기",
      set_time_sec: 3,
      rest_time_sec: 5,
      memo: "힘들다..",
      default: 1,
      workoutimage: 'Exercise/018-running.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "계단오르기",
      set_time_sec: 4,
      rest_time_sec: 5,
      memo: "힘들다..",
      default: 1,
      workoutimage: 'Exercise/038-climbing-stairs.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "훌라후프",
      set_time_sec: 5,
      rest_time_sec: 5,
      memo: "휴.. 힘들다...",
      default: 1,
      workoutimage: 'Exercise/033-hula-hoop.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "점핑",
      set_time_sec: 6,
      rest_time_sec: 5,
      memo: "휴....",
      default: 1,
      workoutimage: 'Exercise/031-jumping.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "유산소운동",
      name: "댄스",
      set_time_sec: 7,
      rest_time_sec: 10,
      memo: "몸매관리, 다이어트",
      default: 1,
      workoutimage: 'Exercise/019-dancing.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "휴식(수분섭취)",
      set_time_sec: 10,
      rest_time_sec: 0,
      memo: "목말라..",
      default: 1,
      workoutimage: 'Rest/05-water.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "휴식(단백질 보충제)",
      set_time_sec: 10,
      rest_time_sec: 0,
      memo: "단백질이 필요해..",
      default: 1,
      workoutimage: 'Rest/03-protein.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "체중계 재보기",
      set_time_sec: 5,
      rest_time_sec: 0,
      memo: "...흠...",
      default: 1,
      workoutimage: 'Rest/09-scale.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "숨고르기",
      set_time_sec: 10,
      rest_time_sec: 0,
      memo: "휴우.....릴렉스... ",
      default: 1,
      workoutimage: 'Rest/08-pulse.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "간식먹기",
      set_time_sec: 20,
      rest_time_sec: 0,
      memo: "꿀맛이야..ㅎ",
      default: 1,
      workoutimage: 'Rest/09-food.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "누워있기",
      set_time_sec: 20,
      rest_time_sec: 0,
      memo: "휴...",
      default: 1,
      workoutimage: 'Rest/07-lyingdown.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "스트레칭",
      set_time_sec: 20,
      rest_time_sec: 5,
      memo: "시원하군...",
      default: 1,
      workoutimage: 'Exercise/020-stretching-3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      category: "휴식",
      name: "요가",
      set_time_sec: 20,
      rest_time_sec: 5,
      memo: "심신안정..",
      default: 1,
      workoutimage: 'Exercise/042-yoga.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },





    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "하프 레그레이즈",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "하복근-수축보다 복근을 늘리는데 집중",
      default: 0,
      order:1,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "레그레이즈 투 힙업",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 35,
      set_number:1,
      rest_time_sec: 0,
      memo: "하복근-골반을 말아올려 최대 수축하기",
      default: 0,
      order:2,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "리버스 크런치",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "하복근-골반을말아 복직근을 수축",
      default: 0,
      order:3,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "휴식",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "간단하게 몸을 푸세요",
      default: 0,
      order:4,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "러시안 트위스트",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "복사근운동입니다.",
      default: 0,
      order:5,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "사이드 크런치-오른쪽",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "복사근을 쥐어짜듯이 수축",
      default: 0,
      order:6,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "발목 찍기",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "누운 상태로 다리를 접고 팔을 뻗어 발목을 찍어주세요",
      default: 0,
      order:7,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "휴식",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "간단하게 몸을 푸세요",
      default: 0,
      order:8,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "크런치",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "상복근-천천히 늘려 끝까지 수축하세요",
      default: 0,
      order:9,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "손 끝으로 무릎찍기",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "상복근-누워서 다리를 접고 손 끝으로 무릎을 찍어주세요",
      default: 0,
      order:10,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "트위스트 크런치",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "상복근-양쪽 무릎과 팔을 교차",
      default: 0,
      order:11,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "휴식",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "간단하게 몸을 푸세요",
      default: 0,
      order:12,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "포암 푸쉬업",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 35,
      set_number:1,
      rest_time_sec: 0,
      memo: "코어에 긴장을 유지하세요",
      default: 0,
      order:13,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "사이드 플랭크업",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "균형을 잡는 과정에서 코어가 강해집니다.",
      default: 0,
      order:14,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 1,
      category: "웨이트운동",
      name: "플랭크 니업",
      set_time_min: 0,
      rest_time_min:0,
      set_time_sec: 30,
      set_number:1,
      rest_time_sec: 0,
      memo: "마지막운동입니다",
      default: 0,
      order:15,
      workoutimage: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },





    {
      userid: 1,
      routine_id: 3,
      category: "웨이트운동",
      name: "벤치프레스",
      set_time_min: 0,
      rest_time_min:2,
      set_time_sec: 30,
      set_number:4,
      rest_time_sec: 0,
      memo: "팔꿈치가 어깨쪽으로 올라가거나 옆구리 쪽으로 떨어지는 것을 주의! 1세트당 12~15, 휴식시간 4분",
      default: 0,
      order:1,
      workoutimage: 'Excerise/051-bench-press.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 3,
      category: "휴식",
      name: "휴식",
      set_time_min: 3,
      rest_time_min:0,
      set_time_sec: 0,
      set_number:1,
      rest_time_sec: 0,
      memo: "운동사이 휴식 3분",
      default: 0,
      order:2,
      workoutimage: 'Rest/08-pulse.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 3,
      category: "웨이트운동",
      name: "데드리프트(등)",
      set_time_min: 0,
      rest_time_min:2,
      set_time_sec: 45,
      set_number:4,
      rest_time_sec: 0,
      memo: "허리를 너무 아치로 만들지 말고 1자로 유지! 1세트당 12~15회, 휴식시간 3분",
      default: 0,
      order:3,
      workoutimage: 'Exercise/052-deadlift.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 3,
      category: "휴식",
      name: "휴식",
      set_time_min: 3,
      rest_time_min:0,
      set_time_sec: 0,
      set_number:1,
      rest_time_sec: 0,
      memo: "운동사이 휴식 3분",
      default: 0,
      order:4,
      workoutimage: 'Rest/08-pulse.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 3,
      category: "웨이트운동",
      name: "숄더프레스(어깨)",
      set_time_min: 1,
      rest_time_min:5,
      set_time_sec: 0,
      set_number:4,
      rest_time_sec: 0,
      memo: "전완을 항상 지면과 수직을 유지해야 팔꿈치와 어깨부상을 방지할 수 있습니다! 1세트당 12~15회, 휴식시간 5분",
      default: 0,
      order:5,
      workoutimage: 'Excerise/037-weight-lifting.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 3,
      category: "휴식",
      name: "휴식",
      set_time_min: 3,
      rest_time_min:0,
      set_time_sec: 0,
      set_number:1,
      rest_time_sec: 0,
      memo: "운동사이 휴식 3분",
      default: 0,
      order:6,
      workoutimage: 'Rest/08-pulse.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 1,
      routine_id: 3,
      category: "웨이트운동",
      name: "스쿼트(하체)",
      set_time_min: 0,
      rest_time_min:5,
      set_time_sec: 60,
      set_number:4,
      rest_time_sec: 0,
      memo: "스쿼트는 허리가 꺾이지 않도록 주의! 1세트당 12~15회, 휴식시간 5분",
      default: 0,
      order:7,
      workoutimage: 'Excerise/046-fitness.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};
