const mongoose=require("mongoose");

const catagoriesSchema=new mongoose.Schema(
    {
       
        name:{
            type:String,
            require:true
        }
       
       
    },{timestamps:true}
    
);
module.exports=mongoose.model("catagories",catagoriesSchema);