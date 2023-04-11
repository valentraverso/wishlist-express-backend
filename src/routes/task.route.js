const express = require("express");
const {getAllTask, postTask} = require("../controllers/task.controller")

const router = express.Router();

router
    .get('/all', getAllTask)
    .post('/upload', postTask)

module.exports = router;