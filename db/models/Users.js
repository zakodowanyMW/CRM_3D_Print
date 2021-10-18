const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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

//password hassing mongodb
userSchema.pre('save', function(next) {
    const user = this;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password,salt);
    user.password = hash;
    next();
})

//compare password
userSchema.methods = {
    comparePassword(password){
        return bcrypt.compareSync(password, this.password)
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;