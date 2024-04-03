import { User } from "../models/User.js"
import bcryptjs from "bcryptjs"
import generateTokenAndSetCookies from "../utils/generateToken.js"


export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body

        if(confirmPassword !== password){
            return res.status(400).json({error: "Passwords should match."})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error: "User with such username already exists."})
        }

        const MALE_PIC = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const FEMALE_PIC = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const salt = await bcryptjs.genSalt(10)
        // HASHING PASSWORD
        const hashedPassword = await bcryptjs.hash(password, salt)
        // 


        // await User.create({fullName, username, password: hashedPassword, gender, profilePic: gender === "male" ? MALE_PIC : FEMALE_PIC})
        const newUser = User({fullName, username, password: hashedPassword, gender, profilePic: gender === "male" ? MALE_PIC : FEMALE_PIC})
        if(newUser){
            generateTokenAndSetCookies(newUser._id, res)
            await newUser.save()
            res.status(201).json({id: newUser._id, fullName, username})

        }else{
            return res.status(400).json({error: "Something went wrong while creating a user."})
        }


    }catch(e){
        console.log("Error in signup controller: " + e.message)
        res.status(500).json({error: "Error in signup: " + e.message})
    }
}


export const login = async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        const isCorrectPassword = await bcryptjs.compare(password, user?.password || "")
        if(!user || !isCorrectPassword){
            return res.status(400).json({error: "Invalid username or password."})
        }
        generateTokenAndSetCookies(user._id, res)

        res.status(200).json({
            _id: user._id,
            username: user.username,
            fullname: user.fullName,
            profilePic: user.profilePic,
            gender: user.gender
        })
    }catch(e){
        console.log("Error in login controller: " + e.message)
        res.status(500).json({error: "Error in login: " + e.message})
    }
}


export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "Logout successfully."})
    } catch (e) {
        console.log("Error in logout controller: " + e.message)
        res.status(500).json({error: "Error in logout: " + e.message})
    }
}