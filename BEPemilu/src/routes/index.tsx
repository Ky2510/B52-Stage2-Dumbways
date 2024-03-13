import * as express from "express"
import ArticleController from "../controllers/ArticleController"
import PartaiController from "../controllers/PartaiController"
import PaslonController from "../controllers/PaslonController"
import UserController from "../controllers/UserController"
import VoterController from "../controllers/VoterController"

const Route = express.Router()

// user
Route.get("/users", UserController.getAll)
Route.post("/user", UserController.create)
Route.post("/user/update/:id", UserController.update)
Route.delete("/user/delete/:id", UserController.delete)

// article
Route.get("/articles", ArticleController.getAll)
Route.post("/article", ArticleController.create)

// partai
Route.get("/partais", PartaiController.getAll)
Route.post("/partai", PartaiController.create)
Route.post("/partai/update/:id", PartaiController.update)
Route.get("/partai/delete/:id", PartaiController.delete)

// paslon
Route.get("/paslons", PaslonController.getAll)
Route.post("/paslon", PaslonController.create)
Route.post("/paslon/update/:id", PaslonController.update)
Route.get("/paslon/delete/:id", PaslonController.delete)

// voter
Route.get("/voters", VoterController.getAll)
Route.post("/voter", VoterController.create)

export default Route