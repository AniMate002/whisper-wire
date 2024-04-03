import mongoose from "mongoose"


export async function mongooseConnect(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB.")
    }catch(e){
        console.log("Error connecting to MongoDB: "  + e.message)
    }
}