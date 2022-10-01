const express = require('express');
const router = express.Router();

const signcontroller = require("../signcontroller/users");

// 로그인/로그아웃/임시로그인

router.post("/login",signcontroller.login) // 토큰 로그인
router.post("/logout",signcontroller.logout) //로그아웃
router.post("/tempuser", signcontroller.tempsignup); //임시회원가입

// 회원
router.post('/signup', signcontroller.signUpController);
router.get('/withdrawl', signcontroller.WithdrawalController);
router.delete('/info', signcontroller.userInfo);
router.patch('/update', signcontroller.updateUser);


module.exports = router;