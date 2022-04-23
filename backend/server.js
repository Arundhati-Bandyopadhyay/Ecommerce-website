const app =require( "./app");
const dotenv=require("dotenv")
const mongoose=require("mongoose")

//handeling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shuting down the server due to uncaught exception`);
    process.exit(1)
})



//config
const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`server running  at port no ${port}`);
})


//database connection
mongoose.connect(
    "mongodb://127.0.0.1:27017/ECOMMERCE-P",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (error) console.log(error);
        else console.log("Database connected");
    }
)

//unhsndeled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:$(err.message)`);
    console.log(`shuttong down the server due to unhadeled promise rejection `);

    server.close(()=>{
        process.exit(1);
    })
}) 