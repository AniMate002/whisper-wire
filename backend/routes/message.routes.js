import express from "express"
import { getMessages, sendMessage } from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/protectRoute.js"

const routers = express.Router()

// routers.get("/", (req, res) => {
//     res.send("messages")
// })

routers.post("/send/:id", protectRoute, sendMessage)
routers.get("/:id", protectRoute, getMessages)

export default routers