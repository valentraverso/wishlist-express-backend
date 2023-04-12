const express = require("express");
const { getAllTask, postTask, updateTask, deleteTask, deleteAllTask } = require("../controllers/task.controller")

const router = express.Router();

router
    .get('/all', getAllTask)
    .post('/upload', postTask)
    .patch('/update/:idTask', updateTask)
    .delete('/delete/:idTask', deleteTask)
    .delete('/delete/all', deleteAllTask)

module.exports = router;