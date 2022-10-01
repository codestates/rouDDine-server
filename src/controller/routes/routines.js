const express = require('express');
const router = express.Router();

const create = require("../routinecontroller/create")
const remove = require("../routinecontroller/delete")
const information = require("../routinecontroller/information")
const update = require("../routinecontroller/update")
const finish = require("../routinecontroller/finishRouddine")

// 루틴 

router.post("/create", create.create_Routine);
router.get("/info", information.info_Routine);
router.delete("/delete", remove.delete_Routine);
router.patch("/update", update.update_Routine);
router.post("/finished", finish.finish_Routine);

module.exports = router
