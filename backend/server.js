import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import { mongooseConnect } from "./db/mongooseConnect.js"
import cookieParser from "cookie-parser"
dotenv.config()
mongooseConnect()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cookieParser())

// app.get("/", (req, res) => {
//     res.send("works")
// })


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})