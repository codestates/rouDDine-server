const express = require('express');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const https = require('https');
const http = require('http');
const signcontroller = require("./controller/signcontroller");
const excontroller = require("./controller/excontroller");
const routinecontroller = require("./controller/routinecontroller");
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

app.post("/user", signcontroller.signUpController); //회원가입
app.delete("/user", signcontroller.WithdrawalConstroller); //회원탈퇴

app.post("/exercise", excontroller.create_exercise); //운동카드 생성
app.get("/exercise", excontroller.info_exercise); //운동카드 불러오기
app.delete("/exercise", excontroller.delete_exercise); //운동카드 삭제
app.patch("/exercise", excontroller.update_exercise); //운동카드 수정

app.post("/routine", routinecontroller.create_Routine); //루틴 생성
app.get("/routine", routinecontroller.info_Routine); //루틴 하나 불러오기
app.delete("/routine", routinecontroller.delete_Routine); //루틴삭제
app.patch("/routine", routinecontroller.update_Routine); //루틴 수정

app.get('/', (req, res) => {
  res.status(201).send('Hello World 🇰🇷');
});
app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});