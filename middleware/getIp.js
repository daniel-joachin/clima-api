export const extractIP = (req,res, next) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        res.locals.userIP = ip
        next()
    } catch (error) {
        res.status(403).json({
            error: error.message
        })
    }
}