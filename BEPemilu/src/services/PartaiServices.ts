import { AppDataSource } from "../data-source"
import { Partai } from "../entity/Partai"

interface PartaiInterface {
    id            : number
    name          : string
    chairman      : string
    vision_mission: string 
    address       : string
}

class PartaiServices {
    async create(reqBody: PartaiInterface): Promise<PartaiInterface>{
        try {
            const repository = AppDataSource.getRepository(Partai)
            const partai = repository.create({
                name : reqBody.name,
                chairman : reqBody.chairman,
                vision_mission : reqBody.vision_mission,
                address : reqBody.address,
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
}

export default new PartaiServices()
