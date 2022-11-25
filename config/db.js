const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
      const connection=await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology:true,
        useNewURlParser:true
      })
      console.log(`Mongodb connect:${connection.connection.host}`);
    }catch(error){
      console.log(`ERROR:${error.message}`);
    }
}


module.exports=connectDB