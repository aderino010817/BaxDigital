import { Request, Response } from "express";
import FollowService from "../services/FollowService";

class FollowController {
    async find(req: Request, res: Response) {
        try {
            const response = await FollowService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json("Cannot get data follows!")
        }
    }
}

export default new FollowController()