import { User } from './../entities/Users';
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

class UserService {
    private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User)

    async find() {
        try {
            const user = await this.userRepository.find()

            return {
                message: "Successfully get user data!",
                user: user,
            }
        } catch (err) {
            throw new Error("Something wrong with the server!")
        }
    }
}

export default new UserService()