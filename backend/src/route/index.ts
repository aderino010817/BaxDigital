import * as express from 'express'
import { Request, Response } from 'express'
import UserController from '../controllers/UserController'
import FollowController from '../controllers/FollowController'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send("Hello World!")
})

router.get('/user', UserController.find)

router.get('/follows', FollowController.find)

export default router