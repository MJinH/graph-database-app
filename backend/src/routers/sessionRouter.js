
const sessionService = require('../services/sessionService')
const databaseService = require('../services/databaseService')

const sessionRouter = (req,res,next) => {
    if(!sessionService.get(req.sessionID)) {
        sessionService.put(req.sessionID, new databaseService())
    }
    next()
}


module.exports = sessionRouter