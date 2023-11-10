const {orderdata,myorderdata}=require("../controllers/orderdata")
const express=require("express")
const checkUrl=require('./middleware')
const router=express.Router()


router.post("/orderdata",checkUrl,orderdata)
router.post("/myorderdata",checkUrl,myorderdata)
module.exports=router