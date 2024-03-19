// require('dotenv').config
import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

/*
First approach to connect with DB by IFFE
import express from "express"

const app = express()

;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("Error to talk with db", error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is Listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()

*/