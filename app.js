const express = require('express');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const https = require('https');
const http = require('http');
const signcontroller = require("./controller/signcontroller");
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

app.post("/user", signcontroller.signUpController);

app.get('/', (req, res) => {
  res.status(201).send('Hello World 🇰🇷');
});
app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});