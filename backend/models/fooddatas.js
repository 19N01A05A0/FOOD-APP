const mongoose=require('mongoose')
const Schema=mongoose.Schema;



const foodDataSchema = new mongoose.Schema ({
    CategoryName:String,
    name:String,
    img:String,
    options: [
        {
          half: {
            type: String,
            
          },
          full: {
            type: String,
            
          },
        },
      ],
    description:String
  });
const foodData=new mongoose.model("foodData",foodDataSchema)
//const user= mongoose.model("User",userSchema)
module.exports=foodData
