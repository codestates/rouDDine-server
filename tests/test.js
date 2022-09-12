const https = require('https') 
const request = require('supertest');
const assert = require('assert');
const app = require('../src/controller/app')
const agent = request(app)
const users = require('../src/controller/signcontroller/users');


request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function(err, res) {
        if (err) throw err;
    });


// 1. 서버접속 테스트

// 2. 회원 가입 테스트

// 3. 로그인 테스트

// 4. 로그아웃 테스트

// 5. 임시로그인 테스트

// 6. 구글 로그인 테스트


// test("signup", async () =>{
//   const signup = await users.signUpController();
// })


//   test("테스트 설명", () => {
//   expect("검증 대상").toXxx("기대 결과");
// });

