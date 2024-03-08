import { AppDataSource } from "../data-source"
import { Voter } from "../entity/Voter"

interface VoterInterface {
    id: number
    user_id: number
    status_vote: boolean
    paslonId?: number 
}

class VoterServices {
    async find(): Promise<VoterInterface[]>{
        try {
            const repository = AppDataSource.getRepository(Voter)
            const vote =  await repository.createQueryBuilder("voter")
                                    .leftJoinAndSelect("voter.paslon", "paslon") 
                                    .execute()
            return vote
        } catch (error) {
            throw error
        }
    }
 
    
    async create(reqBody: VoterInterface): Promise<VoterInterface>{
        try {
            const repository = AppDataSource.getRepository(Voter)
            const vote = repository.create({
                user_id: reqBody.user_id,
                status_vote: reqBody.status_vote,
                paslon: {id: reqBody.paslonId},
            })

            await repository.createQueryBuilder()
                            .insert()
                            .into(Voter)
                            .values(vote)
                            .execute()
            return
        } catch (error) {
            throw error
        }
    }
}

export default new VoterServices