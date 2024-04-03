import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    fullName: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 6},
    gender: {type: String, required: true, enum: ["male", "female"]},
    profilePic: {type: String, default: ""}
}, {timestamps: true})


export const User = mongoose.model("User", userSchema)