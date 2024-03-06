import { AppDataSource } from "../data-source"
import { User } from "../entity/User" 

enum Gender {
    male = "Male",
    female = "Female"
}

interface UserInterface {
    fullname: string
    username: string
    password: string
    gender: Gender
    address: string
}

class UserService {
    async create(reqBody: UserInterface): Promise<UserInterface>{
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

    async find(): Promise<UserInterface[]>{
        try {
            const users = await AppDataSource.getRepository(User)
                                             .createQueryBuilder("user")
                                             .getMany()
            return users
        } catch (error) {
            throw error
        }
    }

    async update(reqBody: UserInterface, userId: number): Promise<UserInterface>{
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

            return
        } catch (error) {
            throw error
        }
    }
    
    async delete(userId: number): Promise<UserInterface>{
        try {
            const repository =  AppDataSource.createQueryBuilder()
            await repository.delete()
                            .from(User)
                            .where("id = :id", { id: userId })
                            .execute()

            return 
        } catch (error) {
            throw error
        }
    }
}

export default new UserService
