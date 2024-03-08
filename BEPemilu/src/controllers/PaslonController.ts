import { Request, Response } from "express"
import PaslonServices from "../services/PaslonServices"

class PaslonController {
    async getAll(req: Request, res:Response): Promise<Response>{
        try {
            const paslons = await PaslonServices.find()
            console.log(paslons)
            return res.status(200).json(paslons)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            // const {error, value} = PartaiValidator.validate(data)
            // if (error) {
            //     return res.status(500).json({message: error.details[0].message})   
            // }
            await PaslonServices.create(data)
            return res.status(200).json({message: "insert success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async update(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            
            // const {error, value} = PaslonVa.validate(data)
            // if (error) {
            //     return res.status(500).json({message: error.details[0].message})   
            // }

            const paslonId = Number(req.params.id)
            await PaslonServices.update(data, paslonId)
            return res.status(200).json({message: "update success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async delete(req: Request, res: Response): Promise<Response>{
        try {
            const userId = Number(req.params.id)
            await PaslonServices.delete(userId)
            return res.status(200).json({message: "delete success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}

export default new PaslonController