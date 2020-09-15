import dotenv from 'dotenv'
dotenv.config() // load environment variables from '.env' file into process.env
import express from 'express'
import session from 'express-session'
import { APP_PORT } from './config'
import { SESSION_OPTIONS } from './config/session'

const app = express()

app.use(
    session(SESSION_OPTIONS)
)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(APP_PORT, () => {console.log(`Server is listening on: http://localhost:${APP_PORT}`)})
