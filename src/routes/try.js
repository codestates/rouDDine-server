const express = require('express');
const router = express.Router();
const tryfunction = require("../controller/testcontroller/tryFunctions")

// 운동 테스트
router.post("/testexercise", tryfunction.create_exercise);
router.get("/testexercise", tryfunction.info_exercise);
router.patch("/testexercise", tryfunction.update_exercise);
router.delete("/testexercise", tryfunction.delete_exercise);

// 루틴 테스트 
router.post("/testroutine", tryfunction.create_Routine);
router.get("/testroutine", tryfunction.info_Routine);
router.patch("/testroutine", tryfunction.update_Routine);
router.delete("/testroutine", tryfunction.delete_Routine);

module.exports = router