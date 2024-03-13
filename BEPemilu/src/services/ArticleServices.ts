import { AppDataSource } from "../data-source"
import { Article } from "../entity/Article"

interface ArticleInterface {
    id: number
    title: string
    image: string
    description: string
    userId?: number 
}

class ArticleServices {
    async find(): Promise<ArticleInterface[]>{
        try {
            const repository = AppDataSource.getRepository(Article)
            const article =  await repository.createQueryBuilder("article")
                                    .leftJoinAndSelect("article.user", "user") 
                                    .getMany()
            return article
        } catch (error) {
            throw error
        }
    }
 
    
    async create(reqBody: ArticleInterface): Promise<ArticleInterface>{
        try {
            const repository = AppDataSource.getRepository(Article)
            const article = repository.create({
                title: reqBody.title,
                image: reqBody.image,
                description: reqBody.description,
                user: {id: reqBody.userId},
            })

            await repository.createQueryBuilder()
                            .insert()
                            .into(Article)
                            .values(article)
                            .execute()
            return article
        } catch (error) {
            throw error
        }
    }
}

export default new ArticleServices