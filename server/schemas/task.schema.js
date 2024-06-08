import mongoose, { Schema } from "mongoose";

const taskModel = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
})

export default mongoose.model("Task", taskModel)