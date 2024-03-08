import { Request, Response } from "express"
import UserServices from "../services/UserServices"
import { UserValidator } from "../vendor/validator/user"

class UserController{
    async getAll(req: Request, res: Response): Promise<Response>{
        try {
            const users = await UserServices.find()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }


    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body

            const { error, value } = UserValidator.validate(data)
            if (error) {
                return res.status(400).json({message: error.details[0].message })
            }

            await UserServices.create(value)
            return res.status(200).json({message: "insert success"})
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async update(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            const userId = Number(req.params.id)
            const { error, value } = UserValidator.validate(data)
            if (error) {
                return res.status(400).json({message: error.details[0].message })
            }
            await UserServices.update(value, userId)
            return res.status(200).json({message: "update success"})
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const userId = Number(req.params.id)
            await UserServices.delete(userId)
            return res.status(200).json({message: "delete success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

}

export default new UserController