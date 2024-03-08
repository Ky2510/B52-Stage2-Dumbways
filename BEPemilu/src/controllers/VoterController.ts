import { Request, Response } from "express";
import VoterService from "../services/VoterService";

class VoterController {
    async getAll(req: Request, res:Response): Promise<Response>{
        try {
            const voters = await VoterService.find()
            console.log(voters)
            return res.status(200).json(voters)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async create(req: Request, res: Response): Promise<Response>{
        try {
            const data = req.body
            await VoterService.create(data)
            return res.status(200).json({message: "insert success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}

export default new VoterController