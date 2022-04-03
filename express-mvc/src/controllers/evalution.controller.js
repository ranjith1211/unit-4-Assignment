const express=require("express")
//import schema
const Evaluation =require("../models/evalution.model")


const router=express.Router();

router.post("",async(req,res)=>{
    try{
const evaluation=await Evaluation.create(req.body)
return res.status(201).send(evaluation)

    }catch(err)
{
return res.status(500).send({message:err.message})
}});

router.get("",async(req,res)=>{
    try{
        const evaluation=await Evaluation.find().lean().exec()
        return res.status(201).send(evaluation)
        
            }catch(err)
        {
        return res.status(500).send({message:err.message})
        }
});

router.get("/:id",async(req,res)=>{
    try{
        const evaluation=await Evaluation.findById(req.params.id).lean().exec()
        return res.status(201).send(evaluation)
        
            }catch(err)
        {
        return res.status(500).send({message:err.message})
        }
});



module.exports=router;