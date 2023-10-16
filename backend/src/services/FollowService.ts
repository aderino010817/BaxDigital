import { Repository } from "typeorm";
import { Follow } from "../entities/Follows";
import { AppDataSource } from "../data-source";

class FollowService {
    private readonly followRepository: Repository<Follow> =
    AppDataSource.getRepository(Follow)

    async find() {
        try {
            const follow = await this.followRepository.find()

            return {
                message: "Successfilly get follows data!",
                follow: follow,
            }
        } catch (err) {
            throw new Error("Something wrong with the server!")
        }
    }

    async create(reqBody?: any, userId?:any): Promise<any> {
        try {
            const follow = this.followRepository.create({
                followed: userId,
                following: reqBody.userFollow,
            })

            await this.followRepository.save(follow)

            return {
                message: "Successfullu create follows data",
                follow: follow
            }
        } catch (err) {
            
        }
    }
}

export default new FollowService()