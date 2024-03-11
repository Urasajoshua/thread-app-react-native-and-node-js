const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
    },
    joinedDate:{
        type:Date,
        default:Date.now
    },
    sentFollowRequest:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    receiveFollowRequest:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    followers:[{type:mongoose.Schema.Types.ObjectId}],
    verified:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String
    }
})

const User = mongoose.model("User",userSchema)
module.exports = User