const express = require('express')
const router = express.Router();
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

router.post("/login",signcontroller.login) // 토큰 로그인
router.post("/logout",signcontroller.logout) //로그아웃
router.post("/tempuser", signcontroller.tempsignup); //임시회원가입

router.post("/user", signcontroller.signUpController); //회원가입
router.delete("/user", signcontroller.WithdrawalConstroller); //회원탈퇴
router.get("/user", signcontroller.userInfo); //유저 정보 불러오기
router.patch("/user", signcontroller.updateUser); //유저 정보 수정하기

router.post("/exercise", createEx.create_exercise); //운동카드 생성
router.get("/exercise", infoEx.info_exercise); //운동카드 불러오기
router.delete("/exercise", deleteEx.delete_exercise); //운동카드 삭제
router.patch("/exercise", updateEx.update_exercise); //운동카드 수정

router.post("/routine", createRoutine.create_Routine); //루틴 생성
router.get("/routine", infoRoutine.info_Routine); //루틴 불러오기 - routine_id가 없으면 모든루틴의 간단한 정보들을, 있으면 루틴 하나의 상세 정보를 반환
router.delete("/routine", deleteRoutine.delete_Routine); //루틴삭제
router.patch("/routine", updateRoutine.update_Routine); //루틴 수정
router.post("/finish", doneRoutine.finish_Routine); //루틴완료

router.post("/testexercise", testcontroller.create_exercise);
router.get("/testexercise", testcontroller.info_exercise);
router.patch("/testexercise", testcontroller.update_exercise);
router.delete("/testexercise", testcontroller.delete_exercise);

router.post("/testroutine", testcontroller.create_Routine);
router.get("/testroutine", testcontroller.info_Routine);
router.patch("/testroutine", testcontroller.update_Routine);
router.delete("/testroutine", testcontroller.delete_Routine);


router.get("/share", sharecontroller.getSharedRoutines); //공유된 루틴 불러오기

module.exports = router ;
