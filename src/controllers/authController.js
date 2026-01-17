import { generateOTPCode } from "../utils/generateOTPCode.js"
import { User } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"



export const signup = async (req, res) => {
    const { email, password, name } = req.body
    try {

        if (!email || !password || !name) {
            return res.status(400).json({
                message: 'Please Fill All The Field Or Server Doesnot getting all the field'
            })
        }

        const isUser = await User.findOne({ email })

        if (isUser) {
            return res.status(400).json({
                success: false,
                message: 'User is Already Exists.'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const otpCode = generateOTPCode()
        console.log(otpCode);
        const expires = Date.now() + 24 * 60 * 60 * 100

        const user = await User.create({
            email,
            password: hashedPassword,
            name,
            verificationToken: otpCode,
            isVerify: false,
            verificationTokenExpiresAt: expires
        })

        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        // LOGIC FOR GENERATE TOKEN AND SET COOKIE

        const token = generateTokenAndSetCookie(res, user._id, user.email, user.name)


        // LOGIC FOR SEND EMAIL WITH VERIFICATION TOKEN 

        res.status(200).json({
            success: true,
            message: 'User Created Successfully',
            user: userWithoutPassword,
            token
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error While SignUp",
            error
        })
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body
    try {


        // Checking all the field is Fill Or Not

        if (!email || !password) {
            return res.status(400).json({
                message: 'Please Fill All The Field Or Server Doesnot getting all the field'
            })
        }


        // Checking whether user or notUser

        const isUser = await User.findOne({ email })

        if (!isUser) {
            return res.status(400).json({
                success: false,
                message: 'User doesnot Exist.'
            })
        }

        // If User Then

        const verifyPassword = await bcrypt.compare(password, isUser.password)

        if (!verifyPassword) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }

        const user = isUser.toObject()
        delete user.password

        // Generate Token and Set to cookie.

        const token = generateTokenAndSetCookie(res, isUser._id, isUser.email, isUser.name)


        res.status(200).json({
            message: " You Are Good To Go",
            token,
            user
        })





    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Internal Server Error While Login'
        })
    }

}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token")

        return res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });

    } catch (error) {
        res.status(400).json({
            message: "internal server error while logout"
        })
    }
}