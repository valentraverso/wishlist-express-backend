const mongoose = require("mongoose")
const Task = require("../models/task.model");

const taskController = {
    getAllTask: async (req, res, next) => {
        const { payload: { sub } } = req.auth;

        try {
            const task = await Task
                .find({ userSub: sub })
                .sort({ _id: -1 });

            res.status(200).send({
                status: 'Completed',
                data: task
            });
            console.log('nuevo usuario')
        } catch (err) {
            res.status(409).send(err);
        }

        next()
    },
    postTask: async (req, res) => {
        const { body } = req;
        const { payload: { sub } } = req.auth;

        try {
            const task = await Task.create({
                ...body,
                userSub: sub
            })
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
        const { payload: { sub } } = req.auth;

        if (!mongoose.Types.ObjectId.isValid(idTask)) {
            return res.status(409).send({
                status: "FALSE",
                msg: `${idTask} is invalid`
            })
        }

        try {
            const task = await Task
                .findOneAndUpdate(
                    {
                        _id: idTask,
                        userSub: sub
                    },
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
    },
    deleteTask: async (req, res) => {
        const { params: { idTask } } = req;
        const { payload: { sub } } = req.auth;

        if (!mongoose.Types.ObjectId.isValid(idTask)) {
            return res.status(409).send({
                status: "FALSE",
                msg: `${idTask} is invalid`
            })
        }

        try {
            const task = await Task
                .findOneAndDelete({
                    _id: idTask,
                    userSub: sub
                });

            res.status(200).send({
                status: "TRUE",
                msg: "Task deleted successfully.",
                data: task
            })
        } catch (err) {
            return {
                status: "FALSE",
                msg: "There was an error while deleting"
            }
        }
    },
    deleteAllTask: async (req, res) => {
        const { payload: { sub } } = req.auth;
        try {
            const task = await Task
                .deleteMany({ userSub: sub })

            res.status(200).send({
                status: "TRUE",
                msg: "All tasks deleted.",
                data: task
            })
        } catch (err) {
            return {
                status: "FALSE",
                msg: "There was an error while deleting"
            }
        }
    }
}

module.exports = taskController;