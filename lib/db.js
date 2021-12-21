import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB

if (!MONGODB_URI) {
    throw new Error('Ajuste o endereço do seu Banco de Dados')
}

if (!MONGODB_DB) {
    throw new Error('Ajuste o nome do seu Banco de Dados')
}

let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb,
        }
    }

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts)
    await client.connect()
    let db = client.db(MONGODB_DB)

    // Set cache
    cachedClient = client;
    cachedDb = db

    return {
        client: cachedClient,
        db: cachedDb,
    }
}