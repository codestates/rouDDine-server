'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', 
  [
    {
      username: "김계란",
      email: "admin1@naver.com" ,
      password: "$2b$10$ythPYW9bz328b/iyxaJ67ugSjJ5aZFxW/04M/WQyqjh4JDeIZXM7u",
      social: null,
      socialid: null,
      gender: "남자",
      age: "33",
      height: 175,
      weigt: 73,
      createdAt: new Date(),
      updatedAt: new Date()
      
    },
    {
      username: "김코딩",
      email: "admin2@naver.com" ,
      password: "$2b$10$ythPYW9bz328b/iyxaJ67ugSjJ5aZFxW/04M/WQyqjh4JDeIZXM7u",
      social: null,
      socialid: null,
      gender: "남자",
      age: "28",
      height: 170,
      weigt: 74,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    username: "박해커",
    email: "admin3@naver.com" ,
    password: "$2b$10$ythPYW9bz328b/iyxaJ67ugSjJ5aZFxW/04M/WQyqjh4JDeIZXM7u",
    social: null,
    socialid: null,
    gender: "여자",
    age: "28",
    height: 167,
    weigt: 58,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: "나여자",
    email: "admin4@naver.com" ,
    password: "$2b$10$ythPYW9bz328b/iyxaJ67ugSjJ5aZFxW/04M/WQyqjh4JDeIZXM7u",
    social: null,
    socialid: null,
    gender: "여자",
    age: "23",
    height: 162,
    weigt: 52,
    createdAt: new Date(),
    updatedAt: new Date()
  }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
