## 현재 아키텍처 구조

```
- src 
	- controller
		- excontroller // 운동기능 추가 컨트롤러 CRUD
		- routinecontroller // 루틴 추가 컨트롤러 CRUD
		- sharecontroller // 공유 컨트롤러 
		- signcontroller // 유저(회원가입, 로그인 등..) 컨트롤러
			- accessToken.js
			- index.js  // 회원가입, 탈퇴, 로그인,로그아웃, 소셜로그인
			- oauth.js
			- refreshToken.js
		- testcontroller // 테스트 컨트롤러 (테스트 케이스 아님..)
	- entities
		- models  // 모델 저장
			- user.js
			- routinepart.js
			- routine.js
			- exercise.js
	- orm
		- config
		- migrations
		- models
		- seeders
	- public
		- image		
	app.js 

```

## 실행 방법

1. `npm i` // 인스톨

2. `npm start` // app.js 실행됨. 

   ![스크린샷, 2022-07-28 20-31-12](https://user-images.githubusercontent.com/71261997/181495125-b0b7b3e8-ab0f-4a95-bdc4-65e3eed35916.png)

## 데이터베이스 마이그레이션

1. `npx sequelize db:migrate`

2. `npx sequelize-cli db:seed:all`

3. `npm start`

   

## 오류 재현 방법

1. `npm start`를 입력후 서버를 실행함.
2. postman 에서 `post` 설정후, 다음과 같이 주소 입력 `http://localhost:3000/login`
3. body 값에 다음과 같은 값을 기입

```
 {
    "email" : "admin1@naver.com",
    "password" : "12345"
}
```

4. 다음과 같은 에러를 내보냄. 

   ![스크린샷, 2022-07-24 01-23-07](https://user-images.githubusercontent.com/71261997/181493130-4fb75b2d-4efd-44d3-a62d-5885d081f435.png)

`app.js`에 모든 기능의 엔드포인트가 있습니다. 

