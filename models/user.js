import { Schema, model, models } from 'mongoose';

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
}, { timeStamps: true })

const User = models.User || model('User', UserSchema)

export default User