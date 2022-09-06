const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const cookieParser = require('cookie-parser')
const https = require('https');
const http = require('http');

// 미들웨어 

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

// 라우터

const exercise = require("./routes/exercise")
const routine = require("./routes/routines")
const share = require("./routes/share")
// const trying = require("./routes/try")
const users = require("./routes/users")

app.use('/', exercise)
app.use('/', routine)
app.use('/', share)
// app.use('/', trying)
app.use('/', users)

// 고정 이미지 폴더
app.use(express.static('/public/image'));

// 서버

const PORT = 3000;


app.get('/', (req, res) => {
  res.status(201).send('Hello World 🇰🇷');
});

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 작동중입니다.`);
});




