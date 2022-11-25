const mongoose=require('mongoose') 

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"Please enter the first name"]

    },

    lastname:{
        type:String,
        required:[true,"Please enter the last name"]
    },
    email:{
        type:String,
        required:[true,"Please enter the email"],
        unique:true,
        

    },
    number:{
        type:Number,
        required:[true,"Please enter the number"],
        unique:true,
        maxlength:10,
        minlegth:10

    },
    password:{
        type:String,
        required:[true,"Please enter the password"]

    },
  
})

const User=mongoose.model("User",userSchema)
module.exports={User}