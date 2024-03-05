import * as express from "express"
import UserController from "../controllers/UserController"

const Route = express.Router()

Route.post("/user", UserController.create)
Route.get("/users", UserController.getAll)

export default Route