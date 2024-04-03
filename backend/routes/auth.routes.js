import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js"

const routes = express.Router()

// routes.get("/signup", (req, res) => {
//     res.send("Sign up route")
// })

routes.post("/signup", signup)

routes.post("/login", login)

routes.post("/logout", logout)

export default routes