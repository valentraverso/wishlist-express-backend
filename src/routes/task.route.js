const express = require("express");
const {postTask} = require("../controllers/task.controller")

const router = express.Router();

router
    .post('/', postTask)

module.exports = router;