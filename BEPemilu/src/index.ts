import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import * as express from "express"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 3000

    // app.use('/', routes)
    app.listen(port, () => console.log("server running..."))
}).catch(error => console.log(error))
