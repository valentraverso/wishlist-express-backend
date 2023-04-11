const express = require("express");
const { getAllTask, postTask, updateTask, deleteTask } = require("../controllers/task.controller")

const router = express.Router();

router
    .get('/all', getAllTask)
    .post('/upload', postTask)
    .patch('/update/:idTask', updateTask)
    .delete('/delete/:idTask', deleteTask)

module.exports = router;