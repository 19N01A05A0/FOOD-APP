const {createuser}=require("../controllers/userdata")
const {login}=require('../controllers/userdata')
const {body}=require('express-validator')
const express=require("express")
const checkUrl=require('./middleware')
const router=express.Router()

router.post("/createuser",checkUrl,[body('email').isEmail(),
//body('name','Name should be min 5').isLength({min:5}),
body('name').isLength({min:5}),
//body('password','Length should be min 5').isLength({min:5})],createuser)
body('password','Incorrect password').isLength({min:5})
,body('location','Valid location').isLength({min:5})],createuser)



router.post("/login",checkUrl,[body('email').isEmail(),
body('password','Incorrect password').isLength({min:5})],login)
module.exports=router