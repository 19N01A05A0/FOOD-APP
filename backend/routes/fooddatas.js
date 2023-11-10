const {getAllFood,displaydata}=require("../controllers/fooddatas")
const express=require("express")
const checkUrl=require('./middleware')
const router=express.Router()

router.get("/",checkUrl,getAllFood)
router.post("/displaydata",checkUrl,displaydata)
module.exports=router