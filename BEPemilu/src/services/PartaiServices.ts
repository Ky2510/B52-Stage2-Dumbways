import { AppDataSource } from "../data-source"
import { Partai } from "../entity/Partai"
import { User } from "../entity/User"

interface PartaiInterface {
    id            : number
    name          : string
    chairman      : string
    vision_mission: string 
    address       : string
}

class PartaiServices {
    async find(): Promise<PartaiInterface[]>{
        try {
            const repository = AppDataSource.getRepository(Partai)
            const partais = await repository.createQueryBuilder("partai")
                                      .getMany()
            return partais
        } catch (error) {
            throw error
        }
    }

    async create(reqBody: PartaiInterface): Promise<PartaiInterface>{
        try {
            const repository = AppDataSource.getRepository(Partai)
            const partai = repository.create({
                name           : reqBody.name,
                chairman       : reqBody.chairman,
                vision_mission : reqBody.vision_mission,
                address        : reqBody.address,
            })
            
            await repository.createQueryBuilder()
                            .insert()
                            .into(Partai)
                            .values(partai)
                            .execute()
            return partai
        } catch (error) {
            throw error
        }
    }

    async update(reqBody: PartaiInterface, partaiId:number): Promise<PartaiInterface>{
        try {
            const repository = AppDataSource.createQueryBuilder()
            await repository.update(Partai)
            .set({
                name           : reqBody.name,
                chairman       : reqBody.chairman,
                vision_mission : reqBody.vision_mission,
                address        : reqBody.address,
            })
            .where("id = :id", { id : partaiId})
            .execute()

            return
        } catch (error) {
            throw error
        }
    }

    async delete(partaiId: number): Promise<PartaiInterface>{
        try {
            const repository = AppDataSource.createQueryBuilder()
            await repository.delete()
                            .from(Partai)
                            .where("id = :id", {id : partaiId})
                            .execute()

            return
        } catch (error) {
            throw error
        }
    }
}

export default new PartaiServices()
