const { application } = require('express')
const express=require('express')
const app=express()
const connectDB=require('./config/db')
const dotenv=require('dotenv');
const userRoutes=require('./router/userRouter')

dotenv.config()
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("Api running")
})


app.use('/',userRoutes)


app.listen(process.env.PORT,()=>{
    console.log("Server Start");
})
