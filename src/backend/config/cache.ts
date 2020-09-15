import { ClientOpts } from 'redis'

const {
    CACHE_HOST = '127.0.0.1',
    CACHE_PORT = 6379,
    CACHE_PASSWORD
} = process.env

export const CACHE_OPTIONS: ClientOpts = {
    host: CACHE_HOST,
    port: +CACHE_PORT,
    password: CACHE_PASSWORD
}
