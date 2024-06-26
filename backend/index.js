import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const app =express();

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('db connected successfully')
})
app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})//TsB9qkcEvX0YGYCf