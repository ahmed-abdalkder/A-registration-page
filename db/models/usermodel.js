const { default: mongoose } = require("mongoose");
 

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{
    timestamps:true,
    versionKey:false
})
const usermodel=mongoose.model("user",userschema)
 
module.exports = usermodel