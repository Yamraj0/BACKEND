import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import router from './routes/authRoutes.js'
import cors from 'cors'

dotenv.config()
const app = express()



// ✅ Or restrict to specific origin (React app)
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST"],        // allowed methods
  credentials: true                // allow cookies/auth headers if needed
}));


app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',router)



app.get('/',(req,res)=>{
    res.send('hello world!')
})

export  default app