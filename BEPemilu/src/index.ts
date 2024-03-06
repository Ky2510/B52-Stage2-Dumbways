import { AppDataSource } from "./data-source"
import * as express from "express"
import Route from "./routes"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 3000

    app.use(express.json())
    app.use('/api/v1', Route)

    app.listen(port, () => console.log( `server running... ${port}` ))
}).catch(error => console.log(error))
