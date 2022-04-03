const mongoose=require("mongoose")
const submissionSchema=new mongoose.Schema({
    evaluation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluations",
        required:true,
    },
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"students",
        required:true,
    },
    marks:{type:String,required:true},
   
},{
    versionKey:false,
    timestamps:true

});

module.exports=mongoose.model("student",studentSchema)