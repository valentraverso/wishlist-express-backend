const mongoose = require("mongoose")
const Task = require("../models/task.model");

const taskController = {
    postTask: async (req, res) => {
        const { body } = req;

        try {
            const task = await Task.create({ ...body })
            res.status(200).send({
                status: 'Upload',
                data: task
            })
        } catch (err) {
            res.status(409).send(err)
        }
    }
}

module.exports = taskController