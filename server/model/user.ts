const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    student_number:{
        type: String,
        require: true,
        unique: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User