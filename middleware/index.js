const express=require("express")
const app=express();
app.use(logger);
app.use(logger1);

app.get("/users",(req,res)=>{
    console.log("users")
    return res.send({route:"/users"})
});
app.get("/students",(req,res)=>{
    console.log("student")
    return res.send({route:"/students"})
});
function logger1(req,res,next){
    
    console.log("before route handler logger1")
    next();
    console.log("after route handler logger1")
}
function logger(req,res,next){
    
    console.log("before route handler logger")
    next();
    console.log("after route handler logger")
}

app.listen(4000,()=>{
    console.log("listening to port 4000")
})