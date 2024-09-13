const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/miniapp');

const userSchema= mongoose.Schema({
    username:String,
    name: String,
    age: Number,
    password: String,
    email: String,
    profilepic:{
        type:String,
        default:"default.webp"

    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})

module.exports = mongoose.model('user' , userSchema);