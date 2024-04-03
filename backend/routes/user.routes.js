import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { getUsersForSideBar } from "../controllers/user.controller.js"

const routes = express.Router()

routes.get("/", protectRoute, getUsersForSideBar)

export default routes