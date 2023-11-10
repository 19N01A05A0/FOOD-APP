const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const foodCategorySchema = new mongoose.Schema ({
  CategoryName:String
});
const foodCategory=new mongoose.model("foodCategory",foodCategorySchema)


module.exports=foodCategory