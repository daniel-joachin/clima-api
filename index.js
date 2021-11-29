import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import cors from 'cors'
import cron from 'node-cron'
import internetAvailable from 'internet-available'

import emergency from './routes/emergency.js'
import { extractIP } from './middleware/getIp.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())

app.use('/', extractIP, emergency)

app.listen(process.env.PORT, () => {
    console.log(`Running on ${process.env.PORT}...`)
})