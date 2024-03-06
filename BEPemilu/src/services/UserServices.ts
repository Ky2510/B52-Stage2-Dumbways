import { AppDataSource } from "../data-source"
import { User } from "../entity/User" 

class UserService {
    async create(reqBody: any): Promise<any>{
        try {
            const repository = AppDataSource.getRepository(User)
            const user = repository.create({
                username: reqBody.username,
                password: reqBody.password,
                fullname: reqBody.fullname,
                address : reqBody.address,
                gender  : reqBody.gender,
            })
            await AppDataSource.getRepository(User)
                               .createQueryBuilder()
                               .insert()
                               .into(User)
                               .values(user)
                               .execute()
            return user
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any>{
        try {
            const users = await AppDataSource.getRepository(User)
                                             .createQueryBuilder("user")
                                             .getMany()
            return users
        } catch (error) {
            throw error
        }
    }

    async update(reqBody: any, userId: number): Promise<any>{
        try{
            const repository =  AppDataSource.createQueryBuilder()
            await repository.update(User)
            .set({
                username: reqBody.username,
                fullname: reqBody.fullname,
                address : reqBody.address,
                gender  : reqBody.gender
            })
            .where("id = :id", { id: userId })
            .execute()
        } catch (error) {
            throw error
        }
    }
    
    async delete(userId: number): Promise<any>{
        try {
            const repository =  AppDataSource.createQueryBuilder()
            await repository.delete()
                            .from(User)
                            .where("id = :id", { id: userId })
                            .execute()
        } catch (error) {
            throw error
        }
    }
}

export default new UserService
