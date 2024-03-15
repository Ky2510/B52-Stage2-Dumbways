import { Request, Response } from "express"
import PaslonServices from "../services/PaslonServices"
import { PaslonValidator } from "../vendor/validator/Paslon"

class PaslonController {
    async getAll(req: Request, res:Response): Promise<Response>{
        try {
            const paslons = await PaslonServices.find()
            return res.status(200).json(paslons)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            const {error, value} = PaslonValidator.validate(data)
            if (error) {
                return res.status(500).json({message: error.details[0].message})   
            }
            await PaslonServices.create(value)
            return res.status(200).json({message: "insert success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async update(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            const {error, value} = PaslonValidator.validate(data)
            if (error) {
                return res.status(500).json({message: error.details[0].message})   
            }
            const paslonId = Number(req.params.id)
            await PaslonServices.update(value, paslonId)
            return res.status(200).json({message: "update success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const paslonId  = Number(req.params.id)
            const deletedPaslon = await PaslonServices.delete(paslonId)
            if (!deletedPaslon) {
                return res.status(404).json({ message: "Paslon not found" })
            }
            return res.status(200).json({message: "delete success"})
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export default new PaslonController