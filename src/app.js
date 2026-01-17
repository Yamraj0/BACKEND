import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import router from './routes/authRoutes.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',router)



app.get('/',(req,res)=>{
    res.send('hello world!')
})

export  default app