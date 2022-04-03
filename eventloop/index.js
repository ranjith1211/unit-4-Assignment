const express=require("express")
//console.log(express)
const app=express();
//console.log(app);

app.get("/users",function (req,res){
    console.log("hellooo");
    res.send({name:"Rashmi"});
});
app.listen(5000,()=>{
    console.log("listening port 5000")
});