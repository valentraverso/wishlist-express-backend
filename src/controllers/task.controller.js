const mongoose = require("mongoose")
const Task = require("../models/task.model");

const taskController = {
    getAllTask: async (req, res) => {
        try{
            const task = await Task.find({})
            res.status(200).send({
                status: 'Completed',
                data: task
            });
            console.log('nuevo usuario')
        }catch(err){
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
    }
}

module.exports = taskController