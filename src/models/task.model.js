const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
})

module.exports = model('tasks', taskSchema)