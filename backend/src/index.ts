import { AppDataSource } from "./data-source"
import * as express from "express"
import router from "./route"
require('dotenv').config()

AppDataSource.initialize().then(async () => {

    const app = express()
    const port = process.env.PORT
    
    app.use(express.json())
    app.use("/", router)

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })

}).catch(error => console.log(error))
