import  express  from "express";
import {config} from 'dotenv' 
import cors from 'cors'
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/Error.js";

config({
    path:'./config/config.env'
})

const app=express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true,
}))
app.use(cookieParser())
app.use(cors())

import authRoutes from './routes/authRoutes.js'
import taskRoutes from './routes/taskRoutes.js'


app.use('/auth',authRoutes)
app.use('/task',taskRoutes)

export default app

app.use(ErrorMiddleware)
