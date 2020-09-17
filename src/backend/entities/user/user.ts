import makeUsername from './fields/username'
import makePassword from './fields/password'
import makeRole from './fields/role'
import { User } from '../types'

export default function buildMakeUser({ hash, time }: Props) {
    return function makeUser(userInfo: User): User {
        const user: User = {}

        user.username = makeUsername(userInfo.username)

        user.password = hash(makePassword(userInfo.password))

        user.role = makeRole(userInfo.role)

        user.meta = {}

        if (userInfo._id) {
            // if user already exists
            user._id = userInfo._id
            user.meta.modifiedOn = time.now()
        } else {
            user.meta.createdOn = time.now()
        }

        return user
    }
}

interface Props {
    hash: CallableFunction
    time: {
        now: CallableFunction
    }
}
