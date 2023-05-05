const mongoose=require("mongoose");
const ROBO=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    scholar:{
        type:Number,
        required:true
    },
    Mob:{
        type:Number,
        required:true
    }
})
const registration=new mongoose.model("registration",ROBO);
module.exports=Register;