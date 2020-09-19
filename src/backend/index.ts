import dotenv from 'dotenv'
dotenv.config({
    path: './src/backend/.env'
}) // load environment variables from '.env' file into process.env
import express from 'express'
import session from 'express-session'
import { APP_PORT, SESSION_OPTIONS, CACHE_OPTIONS } from './config'
import redis from 'redis'
import connectRedis from 'connect-redis'
import { userRouter } from './routes'

const CacheStore = connectRedis(session)
const cacheClient = redis.createClient(CACHE_OPTIONS)

const app = express()

app.use(
    session({
        store: new CacheStore({ client: cacheClient }),
        ...SESSION_OPTIONS
    })
)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/users', userRouter)

app.listen(APP_PORT, () => {
    console.log(`Server is listening on: http://localhost:${APP_PORT}`)
})
