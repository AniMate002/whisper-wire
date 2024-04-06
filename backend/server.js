import path from "path"
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import { mongooseConnect } from "./db/mongooseConnect.js"
import cookieParser from "cookie-parser"
import { app, server } from "./socket/socket.js"
dotenv.config()
mongooseConnect()

const PORT = process.env.PORT || 3000

const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())

// app.get("/", (req, res) => {
//     res.send("works")
// })


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

// allows express server communicate with static html files
// that will appear in dist folder after building front-end project
app.use(express.static(path.join(__dirname, "/frontend/dist")))
// 
app.get("*", (req, res) => [
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
])

server.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})