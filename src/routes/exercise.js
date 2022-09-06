const express = require('express');
const router = express.Router();

const create = require("../controller/excontroller/create");
const remove = require("../controller/excontroller/delete");
const information = require("../controller/excontroller/information");
const update = require("../controller/excontroller/update");

// 운동카드 CRUD

router.post("/exercise", create.create_exercise);  
router.get("/exercise", information.info_exercise);
router.delete("/exercise", remove.delete_exercise);
router.patch("/exercise", update.update_exercise);

module.exports = router