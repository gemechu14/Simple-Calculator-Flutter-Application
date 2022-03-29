const mongoose=require("mongoose");

const postSchema=new mongoose.Schema(
    {
       
        title:{
            type:String,
            require:true,
            unique:true
        },
        desc:{
            type:String,
            require:true
        },
        username: {
            type: String,
            required: true,
          },
        photo:{
            type:String,
            require:false
        },
        catagories:{
            type:Array,
            require:false
        }
       
    },{timestamps:true}
    
);
module.exports=mongoose.model("post",postSchema);