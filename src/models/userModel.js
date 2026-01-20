import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastLogin:{
        type: Date,
        default : Date.now
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationUrl: String,
    verificationUrlExpiresAt: Date,
    verificationTokenExpiresAt: Date,

},{timestamps: true})

export const User = mongoose.model('userModel',userSchema)