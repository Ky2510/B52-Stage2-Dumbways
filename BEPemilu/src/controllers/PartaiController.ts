import { Request, Response } from "express"
import PartaiServices from "../services/PartaiServices"
import { PartaiValidator } from "../vendor/validator/Partai"

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

            const {error, value} = PartaiValidator.validate(data)
            if (error) {
                return res.status(500).json({message: error.details[0].message})   
            }

            await PartaiServices.create(data)
            return res.status(200).json({message: "insert success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async update(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            
            const {error, value} = PartaiValidator.validate(data)
            if (error) {
                return res.status(500).json({message: error.details[0].message})   
            }

            const partaiId = Number(req.params.id)
            await PartaiServices.update(data, partaiId)
            return res.status(200).json({message: "update success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const partaiId = Number(req.params.id)
            await PartaiServices.delete(partaiId)
            return res.status(200).json({message: "delete success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}

export default new PartaiController