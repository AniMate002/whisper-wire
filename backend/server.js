import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import { mongooseConnect } from "./db/mongooseConnect.js"
dotenv.config()
mongooseConnect()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("works")
// })


app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})