const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: (props) => `${props.value} is not a valid email address!`
        }
    },
    phoneNo: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^\d{10}$/.test(value);
            },
            message: (props) => `${props.value} is not a valid mobile number!`
        }
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    resetToken:{
        type:String
    },
    resetTokenExpiry:{
        type:Date
    }
});

module.exports = mongoose.model('User', userSchema);
