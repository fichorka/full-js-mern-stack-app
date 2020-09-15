import makeUsername from './fields/username'
import makePassword from './fields/password'
import makeRole from './fields/role'

export default function buildMakeUser({ hash, time }: Props) {
    return function makeUser(userInfo: User): User {
        const user: User = {
            username: makeUsername(userInfo.username),
            password: hash(makePassword(userInfo.password)),
            role: makeRole(userInfo.role),
            meta: {
                createdOn: time.now()
            }
        }

        return user
    }
}

export interface User {
    username: string
    password: string
    role: string
    meta?: {
        createdOn: string
    }
}

interface Props {
    hash: CallableFunction
    time: {
        now: CallableFunction
    }
}
