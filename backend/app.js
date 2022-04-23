const express = require("express")
const errorMiddleware=require("./MIDDLEWARE/error");
const app=express();


app.use(express.json())

//ROUTE IMPORt
const product=require("./routes/productRoute")
app.use("/api/v1",product);
app.use(errorMiddleware);

//middleware for errors
module.exports=app;