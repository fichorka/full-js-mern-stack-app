import { Router } from 'express'
import { deleteItem, getItems, patchItem, postItem } from '../controllers'
import makeExpressCallback from '../express-callback/express-callback'

const router = Router()

router.get('/', makeExpressCallback(getItems))

router.post('/', makeExpressCallback(postItem))

router.delete('/:name', makeExpressCallback(deleteItem))

router.get('/:name', makeExpressCallback(getItems))

router.patch('/:name', makeExpressCallback(patchItem))

export { router }
