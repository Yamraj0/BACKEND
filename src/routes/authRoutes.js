import { login, logout, signup } from '../controllers/authController.js'
import express from 'express'

const router = express.Router()


// login ko lagi 

router.post('/login',login)

// signup ko lagi

router.post('/signup',signup)

// logout ko lagi

router.post('/logout',logout)




export default router