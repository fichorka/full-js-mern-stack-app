import { Router } from 'express'
import { deleteUser, getUsers, patchUser, postUser } from '../controllers'
import makeExpressCallback from '../express-callback/express-callback'

const router = Router()

router.get('/', makeExpressCallback(getUsers))

router.post('/', makeExpressCallback(postUser))

router.delete('', makeExpressCallback(deleteUser))

router.get('/:username', makeExpressCallback(getUsers))

router.patch('/:username', makeExpressCallback(patchUser))

export { router }
