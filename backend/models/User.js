const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const UserSchema = new mongoose.Schema ({
    name:
    {
        type:String,
        required:true
    },
    location:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    date:
    {
        type:Date,
        default:Date.now
    }
});

//const user= mongoose.model("User",userSchema)
module.exports=new mongoose.model("user",UserSchema)