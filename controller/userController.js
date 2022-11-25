const {User}=require('../model/userModel')
const bcrypt=require('bcryptjs')
const {generateToken} =require('../utils/generateToken')

const registerUser=async(req,res)=>{
    
    const {firstname,lastname,email,number,password,occupation}=req.body

    // checking all the field

     if(!firstname || !lastname ||!email || !number || !password){
      res.status(400).json("Please enter the all fileld")
     }

    // user Exist
    
     const userExist=await User.findOne({$or:[{email:email},{number:number}]})
     if(userExist){
        res.status(400).json("User Exist")
     }

    // hash password

    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt)

   
    // create user

     const user=await User.create({
        firstname,
        lastname,
        email,
        number,
        password:hashPassword,
     })

    if(user){
        res.status(201).json(user)
    }else{
        res.status(400).json("User is not created")
    }

}

//user login

const loginUser=async(req,res)=>{
    try {
    const user=await User.findOne({email:req.body.email})

     // generate token

    const token=generateToken(user._id)
    res.status(200).json({user,token})
    // user login check

  
        
    } catch (error) {
        res.status(400).json("User is not registered")
    }
}

// get a user

const getUser=async(req,res)=>{
try{
const user=await User.findOne({_id:req.user._id})
res.status(200).json(user)

}catch(error){
   res.status(400).json(error)
}

}

// update user

const updateUser= async(req,res)=>{    

        try {
    
            const updateUser=await User.findByIdAndUpdate({_id:req.user._id},req.body,
                {new:true})
            res.status(200).json(updateUser)
        
           } catch (error) {
            res.status(400).json(error.message)
            
           }
    

  
}


//delete User

const deleteUser=async(req,res)=>{
    try {
        const user=await  User.findByIdAndDelete({_id:req.user._id})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports={
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser,

}