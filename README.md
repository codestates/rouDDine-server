## 현재 아키텍처 구조 (09.08)

```
- src 
	- controller
		- excontroller // 운동기능 추가 컨트롤러 CRUD
			-create.js ..
		- routinecontroller // 루틴 추가 컨트롤러 CRUD
			- create.js ..
		- sharecontroller // 공유 컨트롤러 
			- share.js
		- signcontroller // 유저(회원가입, 로그인 등..) 컨트롤러
			- accessToken.js
			- users.js  // 회원가입, 탈퇴, 로그인,로그아웃
			- oauth.js  // 소셜 로그인 (네이버, 구글)
			- refreshToken.js
		- routes // 라우트 
			- exercise.js
			- routines.js
			- share.js
			- users.js
		app.js // 각종 라우트, 미들웨어 관리 
	- orm
		- sequelize
			- config
			- migrations
			- models
				-index.js
				-user.js
				-routinepart.js
				-routine.js
				-exercise.js
			- seeders
	- public
		- image		
	server.js // 서버 실행 분리 
- tests
	- test.js // jest test 
```

## 실행 방법

1. `npm i` // 인스톨

2. `npm start` // server.js 실행됨. 

   ![스크린샷, 2022-07-28 20-31-12]((https://velog.velcdn.com/images/corepen_/post/ac70276c-ad58-442b-82af-3f574ce94888/image.png)

## 테스트 케이스 실행

1. `npm test`

## 데이터베이스 마이그레이션

1. `npx sequelize db:create`

2. `npx sequelize db:migrate`

3. `npx sequelize-cli db:seed:all`

## 리팩토링 방향

1. 에러와 버그 상황에 잘 대처가 가능하도록 SRP 원칙에 충실히 할것
	- 의존방향이 꼬이지않게 해야함.
	- 명확한 네이밍.
	- 추가 확장 및 수정사항에 용이한 구조를 가질것
2. 커밋 메세지에 신경쓸것 (이슈와 연동)
3. 객체 지향적으로 리팩토링하기

## 현황

1. test케이스 만들어보기

## 해야할것

1. supertest를 이용하여 내부적으로 익스프레스 서버를 구동시켜 가상의 요청,접근을 통해 테스트 위해 서버접속
2. 기능이 제대로 작동하는지에 대한 테스트케이스 확인

