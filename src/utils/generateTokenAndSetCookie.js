import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

export const generateTokenAndSetCookie = (res,id,email,name)=>{
    const token = jwt.sign({id,email,name},process.env.JWT_KEY,{expiresIn: '7d'})

     res.cookie('token',token,{
        httpOnly : true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 60 * 60 * 1000
    })
    return token
}