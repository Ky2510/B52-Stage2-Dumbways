import { Request, Response } from "express"
import ArticleServices from "../services/ArticleServices"

class ArticleController {
    async getAll(req: Request, res:Response): Promise<Response>{
        try {
            const articles = await ArticleServices.find()
            return res.status(200).json(articles)
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
            await ArticleServices.create(data)
            return res.status(200).json({message: "insert success"})
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }
}

export default new ArticleController