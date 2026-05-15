import exp from 'express'
import {config} from 'dotenv'

import {connect} from 'mongoose'

import {userApp} from './APIs/UserAPI.js'
import {authorApp} from './APIs/AuthorAPI.js'
import {adminApp}from './APIs/AdminAPI.js'
import { commanApp } from './APIs/CommanAPI.js'
import cookieParser from "cookie-parser";
import cors from 'cors'

config()

const app  = exp()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// body parser middleware
app.use(exp.json())

// root route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' })
})

app.use(cookieParser())

// path level middleware
app.use("/user-api",userApp);
app.use("/author-api",authorApp);
app.use("/admin-api",adminApp);
app.use("/auth",commanApp);

const connectDB = async ()=>{
    try{
        await connect(process.env.DB_URL);
        console.log("db connected");
// asign the port
        const port = process.env.PORT || 9766
app.listen(port,()=>console.log(`server listening on ${port}..`));

    } catch(error){
        console.log("err in db connection",error);
    }
};

connectDB()


// to handle invalid paths
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`path ${req.url} is invalid`})
})
// to handle errors
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name == "ValidationError"){
        return res.status(400).json({message:"error occured",error:err.message})
    }
})