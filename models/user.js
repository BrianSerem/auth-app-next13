import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'password is required!'],
    },
}, { timestamps: true })

const User = models.User || mongoose.model('User', UserSchema)

export default User