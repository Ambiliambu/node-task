const jwt =require('jsonwebtoken')
const {User}=require('../model/userModel')



const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
     try {
        
   
        token=req.headers.authorization.split(' ')[1]

        let decode=jwt.verify(token,process.env.JWT_SECRET_KEY)
   
       req.user=await User.findOne({_id:decode.Id}).select('-password')

       next()
   
    }catch(error) {
        res.status(401).json(error.message)
    }
    }
    if(!token){
        res.status(401).json("Not authorized")

    }
}


module.exports={protect}