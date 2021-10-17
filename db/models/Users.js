const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        //trim not space beetween
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password is required min 6 leater']
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;