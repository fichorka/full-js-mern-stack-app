import { SessionOptions } from 'express-session'
import { IN_PROD } from './app'

const HOUR = 1000 * 60 * 60

const {
    SESSION_SECRET = 'secret',
    SESSION_NAME = 'sid',
    SESSION_IDLE_TIMEOUT = HOUR
} = process.env

export const SESSION_OPTIONS: SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT,
        secure: IN_PROD,
        sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false
}
