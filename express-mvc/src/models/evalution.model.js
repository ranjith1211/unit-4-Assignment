const mongoose=require("mongoose")
const evaluationSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    date_of_evaluation:{type:String,required:true},
    batch_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"batchs",
        required:true,
    }
   
},{
    versionKey:false,
    timestamps:true

});

module.exports=mongoose.model("evaluation",evaluationSchema)