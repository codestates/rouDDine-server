const express = require('express');
const router = express.Router();

const create = require("../routinecontroller/create")
const remove = require("../routinecontroller/delete")
const information = require("../routinecontroller/information")
const update = require("../routinecontroller/update")
const finish = require("../routinecontroller/finishRouddine")

// 루틴 

router.post("/routines", create.create_Routine);
router.get("/routines", information.info_Routine);
router.delete("/routines", remove.delete_Routine);
router.patch("/routines", update.update_Routine);
router.post("/routines/finished", finish.finish_Routine);

module.exports = router
