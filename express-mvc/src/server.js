const app=require("./index")

const connect=require("./config/db")


app.listen(5000, async ()=>
{
    try{
        await connect();

    }catch(err){
        console.log(err);
    }
    console.log("listening to port 5000")
});


