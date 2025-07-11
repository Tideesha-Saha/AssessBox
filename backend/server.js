require("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");

const app=express();

app.use(
    cors({
        origin:"*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
    })
);

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname,"uploads"),{}));

const port=process.env.port || 5000;
app.listen(port,()=>{
    console.log("app is listening at port ", port);
});