const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
// super test
const request = require('supertest');
const assert = require('assert');
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
const users = require("./routes/users");

app.use('/', exercise)
app.use('/', routine)
app.use('/', share)
app.use('/', users)

// 고정 이미지 폴더
app.use(express.static('/public/image'));

app.get('/', (req, res) => {
  res.status(201).send('Hello World 🇰🇷');
});

request(app)
  .get('/')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err,res) {
    if(err) throw err;
  });

module.exports = app; 




