const express=require("express")
//import schema
const Batch=require("../models/batch.model")


const router=express.Router();

router.post("",async(req,res)=>{
    try{
const batch=await Batch.create(req.body)
return res.status(201).send(batch)

    }catch(err)
{
return res.status(500).send({message:err.message})
}});

router.get("",async(req,res)=>{
    try{
        const batch=await Batch.find().lean().exec()
        return res.status(201).send(batch)
        
            }catch(err)
        {
        return res.status(500).send({message:err.message})
        }
});

module.exports=router;