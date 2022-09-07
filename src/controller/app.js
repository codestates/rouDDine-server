const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
// 미들웨어 
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

// 라우트 
const exercise = require("./routes/exercise")
const routine = require("./routes/routines")
const share = require("./routes/share")
// const trying = require("./routes/try")
const users = require("./routes/users");

app.use('/', exercise)
app.use('/', routine)
app.use('/', share)
app.use('/', users)

// 고정 이미지 폴더
app.use(express.static('/public/image'));


module.exports = app; 




