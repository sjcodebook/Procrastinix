import express from 'express'
import cors from 'cors'

import config from './config.js'
import { rateLimiter } from './middleware.js'
import subscribersRoute from './routes/subscribersRoute.js'

const app = express()

const corsOptions = {
  origin: 'https://procrastinix.com',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(rateLimiter)

//routes
app.use('/v1', subscribersRoute)

app.listen(config.port, () => console.log(`Server is live @ ${config.hostUrl}`))
