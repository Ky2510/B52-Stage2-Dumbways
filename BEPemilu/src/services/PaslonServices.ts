import { AppDataSource } from "../data-source"
import { Paslon } from "../entity/Paslon"

interface PaslonInterface {
    id            : number
    name          : string
    serial_number : string
    vision_mission: string 
}

class PaslonServices {
    async find(): Promise<PaslonInterface[]>{
        try {
            const repository = AppDataSource.getRepository(Paslon)
            const paslons = await repository.createQueryBuilder("paslon")
                                      .getMany()
            return paslons
        } catch (error) {
            throw error
        }
    }

    async create(reqBody: PaslonInterface): Promise<PaslonInterface>{
        try {
            const repository = AppDataSource.getRepository(Paslon)
            const paslon = repository.create({
                name           : reqBody.name,
                serial_number  : reqBody.serial_number,
                vision_mission : reqBody.vision_mission,
            })
            
            await repository.createQueryBuilder()
                            .insert()
                            .into(Paslon)
                            .values(paslon)
                            .execute()
            return paslon
        } catch (error) {
            throw error
        }
    }

    async update(reqBody: PaslonInterface, paslonId:number): Promise<PaslonInterface>{
        try {
            const repository = AppDataSource.createQueryBuilder()
            await repository.update(Paslon)
            .set({
                name           : reqBody.name,
                serial_number  : reqBody.serial_number,
                vision_mission : reqBody.vision_mission,
            })

            .where("id = :id", { id : paslonId})
            .execute()

            return
        } catch (error) {
            throw error
        }
    }

    async delete(paslonId: number): Promise<PaslonInterface>{
        try {
            const repository = AppDataSource.createQueryBuilder()
            await repository.delete()
                            .from(Paslon)
                            .where("id = :id", {id : paslonId})
                            .execute()

            return
        } catch (error) {
            throw error
        }
    }
}

export default new PaslonServices()
