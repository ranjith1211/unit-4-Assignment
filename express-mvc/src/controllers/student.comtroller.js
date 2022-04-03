const express=require("express")

const Student=require("../models/student.model")

const router=express.Router();

router.post("",async(req,res)=>{
    try{
const student=await Student.create(req.body)
return res.status(201).send(student)

    }catch(err)
{
return res.status(500).send({message:err.message})
}});

router.get("",async(req,res)=>{
    try{
        const student=await Student.find().
        populate({path:"_id",select:["firstName","lastName"]}).
        lean().exec();
        return res.status(201).send(student)
        
            }catch(err)
        {
        return res.status(500).send({message:err.message})
        }
});



module.exports=router;
