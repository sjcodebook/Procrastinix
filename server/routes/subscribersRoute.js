import express from 'express'

import { addEmailToList } from '../controllers/subscribersControllers.js'

const router = express.Router()

router.post('/add-email', addEmailToList)

export default router
