const jwt=require('jsonwebtoken')

const generateToken=(Id)=>{
    return jwt.sign({Id},process.env.JWT_SECRET_KEY,{
        expiresIn:"1m"
    })
}

module.exports={generateToken}