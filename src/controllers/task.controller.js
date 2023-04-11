const mongoose = require("mongoose")
const Task = require("../models/task.model");

const taskController = {
    getAllTask: async (req, res) => {
        try {
            const task = await Task
                .find({})
                .sort({ _id: -1 });

            res.status(200).send({
                status: 'Completed',
                data: task
            });
            console.log('nuevo usuario')
        } catch (err) {
            res.status(409).send(err);
        }
    },
    postTask: async (req, res) => {
        const { body } = req;

        try {
            const task = await Task.create({ ...body })
            res.status(200).send({
                status: 'Upload',
                data: task
            });
        } catch (err) {
            res.status(409).send(err);
        }
    },
    updateTask: async (req, res) => {
        const { body, params: { idTask } } = req;

        if (!mongoose.Types.ObjectId.isValid(idTask)) {
            return res.status(404).send({
                status: "FALSE",
                msg: `${idTask} is invalid`
            })
        }

        try {
            const task = await Task
                .findByIdAndUpdate(
                    idTask,
                    { ...body },
                    { new: true }
                )

            res.status(200).send({
                status: "TRUE",
                msg: "Task updated successfully.",
                data: task
            })
        } catch (err) {
            return {
                status: "FALSE",
                msg: "There was an error while updating"
            }
        }
    }
}

module.exports = taskController