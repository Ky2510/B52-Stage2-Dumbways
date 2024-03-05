import { AppDataSource } from "./data-source"
import * as express from "express"
import { Request, Response } from "express"
import Route from "./routes"
import fetch from "node-fetch"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 3000

    app.use(express.json())
    app.use('/api/v1', Route)
    // app.get('/', async (req: Request, res: Response) => {
    //     try {
    //         const url = await fetch('http://localhost:3000/api/v1/users')
    //         const users = await url.json()
    //         return users
    //     } catch (error) {
    //         console.log('error fetching data', error)
    //         return res.status(500).json({message: 'Internal Server Error'})            
    //     }
    // })

    app.listen(port, () => console.log( `server running... ${port}` ))
}).catch(error => console.log(error))
