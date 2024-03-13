import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Paslon } from "./entity/Paslon"
import { Partai } from "./entity/Partai"
import { Voter } from "./entity/Voter"
import { Article } from "./entity/Article"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lavesfar123",
    database: "db_pemilu",
    synchronize: true,
    logging: false,
    entities: [User, Paslon, Partai, Voter, Article],
    migrations: [],
    subscribers: [],
})
