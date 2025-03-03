import mongoose from "mongoose"
const Schema = mongoose.Schema
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startTime:{
        type: Date,
        require: true,
    },
    endTime:{
        type: Date,
        require: true,
    },
    totalVoter: {
        type: Number,
        required: true,
    },
    requireVoter: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    options: {
        type:[{"option": String, "selectNumber": Number}],
        required: true
    },

    participation: {
        type:[String],
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post