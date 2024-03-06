import * as express from "express"
import UserController from "../controllers/UserController"

const Route = express.Router()

Route.post("/user", UserController.create)
Route.get("/users", UserController.getAll)
Route.post("/user/update/:id", UserController.update)
Route.delete("/user/delete/:id", UserController.delete)

export default Route