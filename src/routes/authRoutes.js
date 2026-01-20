import { login, logout, signup, verifyToken, verifyUrl } from '../controllers/authController.js'
import express from 'express'

const router = express.Router()


// login ko lagi 

router.post('/login',login)

// signup ko lagi

router.post('/signup',signup)

// logout ko lagi

router.post('/logout',logout)

// verification ko lagi

router.post('/verifyemail/:token',verifyUrl)

router.post('/verifyemail',verifyToken)




export default router