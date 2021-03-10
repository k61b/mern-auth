import mongoose from 'mongoose'
import User from './user.interface'

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema)

export default userModel