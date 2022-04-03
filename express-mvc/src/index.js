const express=require("express")

//import constroller 
const usersController=require("./controllers/user.controller")

const studentController=require("./controllers/student.comtroller")

const batchController=require("./controllers/batch.controller")
const evaluationController=require("./controllers/evalution.controller")

const submissionController=require("./controllers/student.comtroller")
const app=express();

app.use(express.json())

app.use("/users",usersController)

app.use("/students",studentController)

app.use("/batchs",batchController)

app.use("/evaluations",evaluationController)

app.use("/submissions",submissionController)

module.exports=app;
