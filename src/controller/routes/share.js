const express = require('express');
const router = express.Router();
const share = require("../sharecontroller/share")

router.get("/share", share.getSharedRoutines); //공유된 루틴 불러오기

module.exports = router