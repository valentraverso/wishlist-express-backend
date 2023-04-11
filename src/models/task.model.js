const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('tasks', taskSchema)