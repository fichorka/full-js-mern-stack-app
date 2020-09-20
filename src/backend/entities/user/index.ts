import moment from 'moment'
import bcrypt from 'bcrypt'
import buildMakeUser from './user'

const makeUser = buildMakeUser({ hash, time: { now } })

async function hash(password: string) {
    return await bcrypt.hash(password, 10)
}

function now() {
    return moment.utc().format().toString()
}

export default makeUser
