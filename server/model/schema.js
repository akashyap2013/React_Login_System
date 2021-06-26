const mongose = require('mongoose');

const userSchema = new mongose.Schema({
    email : {
        type: String,
        unique : true,
        required : true
    },
    password : {
        type: String,
        required : true,
        minlength: 8
    },
    username: {
        type: String
    }
})

module.exports = User = mongose.model('user', userSchema)