const express=require('express');
const { loginUser, getUser, registerUser, updateUser, fetchUser, deleteUser } = require('../controller/userController');
const router=express.Router();
const {protect}=require('../middleware/protectMiddleware')



router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/getuser',protect,getUser)
router.patch('/updateuser',protect,updateUser)
router.patch('/deleteuser',protect,deleteUser)





module.exports=router