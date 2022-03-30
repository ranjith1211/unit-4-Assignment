const express = require("express");

const app=express();

app.get("/home",function(req,res){
    res.send("Hello")
});

const books = [
    {title: 'Harry Potter', id: 1},
    {title: 'Twilight', id: 2},
    {title: 'Lorien Legacies', id: 3}
    ]

app.get("/books",function(req,res){
    res.send(books);
});
 
app.listen(4000,()=>{
    console.log("Listening on port 4000")
})
