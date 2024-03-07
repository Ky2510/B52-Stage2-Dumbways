import { Request, Response } from "express"
import PartaiServices from "../services/PartaiServices"

class PartaiController {
    async getAll(req: Request, res:Response): Promise<Response>{
        try {
            const partais = await PartaiServices.find()
            return res.status(200).json(partais)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            await PartaiServices.create(data)
            return res.status(200).json({message: "insert success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}

export default new PartaiController