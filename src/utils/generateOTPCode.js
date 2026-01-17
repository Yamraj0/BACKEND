import crypto from 'crypto'

export const generateOTPCode = ()=>{
    return crypto.randomInt(0, Math.pow(10, 6))
               .toString()
               .padStart(6, "0");
}