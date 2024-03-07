import * as express from "express"
import PartaiController from "../controllers/PartaiController"
import UserController from "../controllers/UserController"

const Route = express.Router()

// user
Route.get("/users", UserController.getAll)
Route.post("/user", UserController.create)
Route.post("/user/update/:id", UserController.update)
Route.delete("/user/delete/:id", UserController.delete)

// partai
Route.get("/partais", PartaiController.getAll)
Route.post("/partai", PartaiController.create)

export default Route