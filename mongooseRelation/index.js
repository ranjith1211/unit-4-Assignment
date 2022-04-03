const express=require("express")
const mongoose=require("mongoose")

const app=express();

app.use(express.json())

const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/mr2");
};
//user schema
//s1--creating the user schema

const userSchema=new mongoose.Schema({

    firstName:{type:String,required:true},
   lastName:{type:String,required:false},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},


},{
    timestamps:true,
    versionKey:false,
});

//user model

const User=mongoose.model("user",userSchema);


//post
//creating post schema

const postSchema=new mongoose.Schema({

    title:{type:String,required:true},
    body:{type:String,required:true},
    //relationship
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
  
},{
    versionKey:false,
    timestamps:true,
});
//post model

const Post=mongoose.model("post",postSchema);

//comment

//commentSchema

const commentSchema=new mongoose.Schema({

    body:{type:String,required:true},
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
  
},{
    timestamps:true,
    versionKey:false,
});
//Comment model

const Comment=mongoose.model("comment",commentSchema);


//crud operations

//get
//post//put//delete


//USER CRUD

app.get("/users",async(req,res)=>{
    try{
        const users=await User.find().lean().exec();
        return res
        .status(200).send({users:users})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }
});



app.post("/users",async(req,res)=>{
    try{
        const user=await User.create(req.body)
        return res
        .status(200).send({user:user})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }
});

//findbyid

app.get("/users/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id).lean().exec();
        return res
        .status(200).send({user:user})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});
//update and delete
app.patch("/users/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res
        .status(200).send({user:user})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});

//delete
app.delete("/users/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
        return res
        .status(200).send({user:user})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

})

//POST CRUD
app.get("/posts",async(req,res)=>{
    try{
        const post=await Post.find().populate({path:"userId",select:{firstName:1,_id:0}}).lean().exec();
        return res
        .status(200).send({post})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }
});

app.post("/posts",async(req,res)=>{
    try{
        const post=await Post.create(req.body)
        return res
        .status(200).send({post:post})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }
});

app.get("/posts/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id).populate("userId").lean().exec();
        return res
        .status(200).send({post:post})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});
app.patch("/posts/:id",async(req,res)=>{
    try{
        const post=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate("userId").lean().exec();
        return res
        .status(200).send({post:post})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});


app.delete("/posts/:id",async(req,res)=>{
    try{
        const post=await Post.findByIdAndDelete(req.params.id)
        return res
        .status(200).send({post:post})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});

//comment crud
app.get("/comments",async(req,res)=>{
    try{
        const comments=await Comment.find().populate("userId").populate("postId").lean().exec();
        return res
        .status(200).send({comments})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }
});

app.post("/comments",async(req,res)=>{
    try{
        const comments=await Comment.create(req.body)
        return res
        .status(200).send({comments:comments})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }
});

app.get("/comments/:id",async(req,res)=>{
    try{
        const comments=await Comment.findById(req.params.id).populate("userId").populate("postId").lean().exec();
        return res
        .status(200).send({post:post})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});
app.patch("/comments/:id",async(req,res)=>{
    try{
        const comments=await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res
        .status(200).send({comments:comments})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});


app.delete("/comments/:id",async(req,res)=>{
    try{
        const comments=await Comment.findByIdAndDelete(req.params.id)
        return res
        .status(200).send({comments:comments})

    }catch(err){
        return res
        .status(500)
        .send({message:err.message})

    }

});



//app listen
app.listen(5000,async ()=>{
    try{
        await connect();
    }catch(err){
        console.log(err)
    }
    console.log("listening to 5000")

});