const mongoose=require('mongoose')
const server='127.0.0.1:27017'
const db="FoodDB"
const connecttomongo=async()=>
{
    try{
        console.log("s")
        await mongoose.connect(`mongodb://${server}/${db}`)
        console.log("connected")
        const fetched_data=await mongoose.connection.db.collection("fooddatas")
       // console.log(fetched_data.namespace.collection)
       //console.log("fetcged",fetched_data)
        fetched_data.find({}).toArray(function(err,data)
        {
            if(err)
            {
                console.log(err)
            }
            else{
                global.food_items=data
                console.log("global",global.food_items)
            }
        })
    }
    catch(err)
    {
        console.log("failed")
    }
}
module.exports=connecttomongo