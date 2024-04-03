import { User } from "../models/User.js"

export const getUsersForSideBar = async (req, res) => {
    try{
        const currUserId = req.user._id
        
        const users = await User.find({ _id: { $ne: currUserId}}).select("-password")
        res.status(200).json(users)

    }catch(e){
        console.log("Error in getUsersForSideBar controller: " + e.message)
        res.status(500).json({error: "Error in getUsersForSideBar: " + e.message})
    }
}