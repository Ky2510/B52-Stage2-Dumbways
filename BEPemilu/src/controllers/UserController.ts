import { Request, Response } from "express"
import UserServices from "../services/UserServices"

class UserController{
    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            const user = await UserServices.create(data)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async getAll(req: Request, res: Response): Promise<Response>{
        try {
            const users = await UserServices.find()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}

export default new UserController