const express = require('express');
const router = express.Router();

const signcontroller = require("../controller/signcontroller/users");

// 로그인/로그아웃/임시로그인

router.post("/login",signcontroller.login) // 토큰 로그인
router.post("/logout",signcontroller.logout) //로그아웃
router.post("/tempuser", signcontroller.tempsignup); //임시회원가입

// 회원
router.post('/users', signcontroller.signUpController);
router.get('/users', signcontroller.WithdrawalController);
router.delete('/users', signcontroller.userInfo);
router.patch('/users', signcontroller.updateUser);


module.exports = router;