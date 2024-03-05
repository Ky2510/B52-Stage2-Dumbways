import * as express from "express"
import UserController from "../controllers/UserController"

const Route = express.Router()

Route.post("/user", UserController.create)

export default Route