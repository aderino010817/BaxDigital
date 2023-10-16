import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    async find(req: Request, res: Response) {
        try {
            const response = await UserService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json("Cannot get data user!")
        }
    }
}

export default new UserController()