const Food=require("../models/fooddatas")
const FoodCategory=require('../models/foodCategory')
//const FoodCategory=require("../models/foodCategory")
const getAllFood=async(req,res)=>
{
    
   /* try{
       await Food.find({}).toArray(async function(err,data)
       {
        const foodCategory=await FoodCategory.find({}).toArray(function(err,cdata)
        {
            if(err)
            {
                console.log(err)
            }
            else
            {
                global.food=data;
                global.foodCategory=cdata;
            }
        }
       )
        console.log(global.food)
    })
    }*/
    try{
        global.food=await Food.find()
        global.foodCategory=await FoodCategory.find()
       // console.log(global.food)
        //console.log(global.foodCategory)
        
    }
    catch(err)
    {
        console.log(err)
    }
    if(!global.food)
    {
        //res.status(404).send() can use send also
        return res.status(404).json({message:"No food found"})
    }
    
    return res.status(200).json({food:global.food,foodCategory:global.foodCategory})
}

const displaydata=async(req,res)=>
{
    try{
        console.log(global.food)
        console.log(global.foodCategory)
        res.send([global.food,global.foodCategory])
    }
    catch(err)
    {
        console.error(err.message)
        res.send("servere error")
    }
}
module.exports.getAllFood=getAllFood
module.exports.displaydata=displaydata