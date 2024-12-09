import express from 'express'

import { addHHSubscriberEmail } from '../controllers/subscribersControllers.js'

const router = express.Router()

router.post('/add-hh-subscriber-email', addHHSubscriberEmail)

export default router
