// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express')
const app = express()
const PORT = 3000
// 3000 포트로 서버 오픈
app.get("/", function (req, res) {
    res.status(201).send("<h1>Hey guys! Hello World !!</h1>");
  });
  app.listen(PORT, function () {
    console.log(`start express server on port ${PORT}`);
  });