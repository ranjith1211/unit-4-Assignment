const mongoose = require("mongoose");


const connect = ()=>{
    return mongoose.connect("mongodb+srv://ranjit:ranjit123@cluster0.u4fav.mongodb.net/web-15?retryWrites=true&w=majority")
}

module.exports=connect;