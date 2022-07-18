const express = require('express');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const https = require('https');
const http = require('http');
const signcontroller = require("./controller/signcontroller");

// 운동 컨트롤러 
const createEx = require("./controller/excontroller/create");
const deleteEx = require("./controller/excontroller/delete");
const infoEx = require("./controller/excontroller/information");
const updateEx = require("./controller/excontroller/update");

// 루틴 컨트롤러
const createRoutine = require("./controller/routinecontroller/create");
const deleteRoutine = require("./controller/routinecontroller/delete");
const doneRoutine = require("./controller/routinecontroller/finishRouddine");
const infoRoutine = require("./controller/routinecontroller/information");
const updateRoutine = require("./controller/routinecontroller/update");

// 루틴 공유 
const sharecontroller = require("./controller/sharecontroller/share");
const testcontroller = require("./controller/testcontroller/index")
const app = express();

app.use(express.json());
const port = 3000;

app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(express.static('/public/image'));

app.post("/login",signcontroller.login) // 토큰 로그인
app.post("/logout",signcontroller.logout) //로그아웃
app.post("/tempuser", signcontroller.tempsignup); //임시회원가입

app.post("/user", signcontroller.signUpController); //회원가입
app.delete("/user", signcontroller.WithdrawalConstroller); //회원탈퇴
app.get("/user", signcontroller.userInfo); //유저 정보 불러오기
app.patch("/user", signcontroller.updateUser); //유저 정보 수정하기

app.post("/exercise", createEx.create_exercise); //운동카드 생성
app.get("/exercise", infoEx.info_exercise); //운동카드 불러오기
app.delete("/exercise", deleteEx.delete_exercise); //운동카드 삭제
app.patch("/exercise", updateEx.update_exercise); //운동카드 수정

app.post("/routine", createRoutine.create_Routine); //루틴 생성
app.get("/routine", infoRoutine.info_Routine); //루틴 불러오기 - routine_id가 없으면 모든루틴의 간단한 정보들을, 있으면 루틴 하나의 상세 정보를 반환
app.delete("/routine", deleteRoutine.delete_Routine); //루틴삭제
app.patch("/routine", updateRoutine.update_Routine); //루틴 수정
app.post("/finish", doneRoutine.finish_Routine); //루틴완료

app.post("/testexercise", testcontroller.create_exercise);
app.get("/testexercise", testcontroller.info_exercise);
app.patch("/testexercise", testcontroller.update_exercise);
app.delete("/testexercise", testcontroller.delete_exercise);

app.post("/testroutine", testcontroller.create_Routine);
app.get("/testroutine", testcontroller.info_Routine);
app.patch("/testroutine", testcontroller.update_Routine);
app.delete("/testroutine", testcontroller.delete_Routine);


app.get("/share", sharecontroller.getSharedRoutines); //공유된 루틴 불러오기

app.get('/', (req, res) => {
  res.status(201).send('Hello World 🇰🇷');
});

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});




