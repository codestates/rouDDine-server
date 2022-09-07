const express = require('express');
const router = express.Router();

const create = require("../routinecontroller/create")
const remove = require("../routinecontroller/delete")
const information = require("../routinecontroller/information")
const update = require("../routinecontroller/update")
const finish = require("../routinecontroller/finishRouddine")

// 루틴 

router.post("/routine", create.create_Routine);
router.get("/routine", information.info_Routine);
router.delete("/routine", remove.delete_Routine);
router.patch("/routine", update.update_Routine);
router.post("/finished", finish.finish_Routine);

module.exports = router
