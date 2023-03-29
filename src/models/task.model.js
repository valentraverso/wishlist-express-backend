const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    status: {
        type: Number,
        require: true
    }
})

module.exports = model('tasks', taskSchema)