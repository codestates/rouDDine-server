const fn = require('./fn');
const app = require('../src/controller/app')
// const { request } = require('http');
// const supertest = require('supertest');
// const app = require('./app')
// const { describe } = require('node:test');


jest.mock("./fn")
fn.createUser.mockReturnValue({name : "Mike", email : "asdf@gmail.com"})

test("유저를 만든다.", () =>{
    const user = fn.createUser("Mike", "asdf@gmail.com")
    expect(user.name).toBe("Mike");
    expect(user.email).toBe("asdf@gmail.com")
})

// describe("POST /users", () =>{
//     describe("given a username and password", ()=>{
//         //  유저 이름과 비밀번호를 데이터베이스에 저장
//         // json 객체가 포함된 유저 아이디를 반환
//         // 상태코드 200을 반환
//         test("status 200 cocde", async () =>{
//             const response = await request(app).post("/users").send({
//                 username : "username",
//                 password : "password",
//                 social : null
//             })
//             expect(response.statusCode).toBe(200)
//         })
//         // 콘텐츠 유형 헤더의 json 응답을수신함
//     })
//     describe("password is missing", () =>{
//         // 암호를 보내지 못할경우 사용자 오류를 내보냄
//     })