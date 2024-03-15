import { AppDataSource } from "./data-source"
import express from "express"
import Route from "./routes"
import cors from "cors"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 3000

    const corsOptions = {
        origin: "http://localhost:5173"
    }

    app.use(cors(corsOptions))
    app.use(express.json())
    app.use('/api/v1', Route)

    app.listen(port, () => console.log( `server running... ${port}` ))
}).catch(error => console.log(error))
