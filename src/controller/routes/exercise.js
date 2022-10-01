const express = require('express');
const router = express.Router();

const create = require("../excontroller/create");
const remove = require("../excontroller/delete");
const information = require("../excontroller/information");
const update = require("../excontroller/update");

// 운동카드 CRUD

router.post("/create", create.create_exercise);  
router.get("/info", information.info_exercise);
router.delete("/delete", remove.delete_exercise);
router.patch("/update", update.update_exercise);

module.exports = router