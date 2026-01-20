import jwt from 'jsonwebtoken'
import crypto from 'crypto'

export const generateVerifyUrl = (id,email,name)=>{
    const verifyUrl = crypto.randomBytes(32).toString('hex')
    return verifyUrl
}