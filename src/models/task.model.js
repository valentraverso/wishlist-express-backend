const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    userSub: {
        type: String,
        required: [true, "We need a user sub to create the task"]
    },
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