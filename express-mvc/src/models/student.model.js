const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    roll_id:{type:String,required:true},
    current_batch:{type:String,required:true},
   
},{
    versionKey:false,
    timestamps:true

});

module.exports=mongoose.model("student",studentSchema)