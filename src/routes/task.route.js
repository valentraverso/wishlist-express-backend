const express = require("express");
const { getAllTask, postTask, updateTask } = require("../controllers/task.controller")

const router = express.Router();

router
    .get('/all', getAllTask)
    .post('/upload', postTask)
    .patch('/update/:idTask', updateTask)

module.exports = router;