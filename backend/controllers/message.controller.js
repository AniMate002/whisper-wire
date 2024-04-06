import { Conversation } from "../models/Conversation.js";
import { Message } from "../models/Message.js";
import { io, getReceiverSocketId } from "../socket/socket.js"


export const sendMessage = async (req, res) => {
    // res.send("Success send message by ID: " + req.params.id)
    try{
        const { message } = req.body
        const receiverId = req.params.id
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [receiverId, senderId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        conversation.messages.push(newMessage)
        await Promise.all([newMessage.save(), conversation.save()])

        // sending a new message to a user with socket.io
        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverSocketId){
            // io.to(socket.id).emit() - sends data to a specific user
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)
    }catch(e){
        console.log("Error in sendMessage controller: " + e.message)
        res.status(500).json({error: "Error in sendMessage: " + e.message})
    }
}


export const getMessages = async (req, res) => {
    try{
        const receiverId = req.params.id
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [receiverId, senderId]}
        }).populate("messages")

        if(!conversation) return res.status(200).json([])

        const messages = conversation.messages

        res.status(200).json(messages)

    }catch(e){
        console.log("Error in getMessages controller: " + e.message)
        res.status(500).json({error: "Error in getMessages: " + e.message})
    }
}