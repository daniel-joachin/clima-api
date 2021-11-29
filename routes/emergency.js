import axios from 'axios'
import express from 'express'
import geoip from 'geoip-lite'

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const geo = geoip.lookup('189.132.9.67')
        const emergencyNumbers = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=d73c07a3fb6e439098d183925213110&q=${geo.city}&days=2&aqi=no&alerts=yes`)
        res.json(
            emergencyNumbers.data
        )
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default router