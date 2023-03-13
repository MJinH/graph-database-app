
const sessionService = require('../services/sessionService')

class DatabaseController {

    constructor() {
        this._databaseService = null
    }

    async getConnectionStatus(req,res) {
        this._databaseService = sessionService.get(req.sessionID)
        let connectionStatus = this._databaseService.isConnected()
        if (connectionStatus) {
            const connectionInfo = this._databaseService.getConnectionInfo()
            res.status(200).json(connectionInfo)
        } else {
            res.status(500).json({msg: 'Not Connected'})
        }
    }

    async connectDatabase(req,res) {
        this._databaseService = sessionService.get(req.sessionID)
        if(!this._databaseService.isConnected()) {
            await this._databaseService.connectDatabase(req.body)
        }
        const connectionInfo = req.body
        res.status(200).json(connectionInfo)
    }

    async disconnectDatabase(req,res) {
        this._databaseService = sessionService.get(req.sessionID)
        let connectionStatus = this._databaseService.isConnected()
        if (connectionStatus) {
            const result = await this._databaseService.disconnectDatabase()
            if (result) {
                res.status(200).json({msg: 'Succesfully Disconnected'})
            } else {
                res.status(500).json({msg: 'Disconnection Failed'})
            }
        } else {
            res.status(500).json({msg: 'Not Connected'})
        }
    }

    async getMetadata(req, res) {
        this._databaseService = sessionService.get(req.sessionID)
        let connectionStatus = this._databaseService.isConnected()
        if (connectionStatus) {
            const result = await this._databaseService.getMetadata()
            res.status(200).json(result)
        } else {
            res.status(500).json({msg: 'Not Connected'})
        }
    }

    async executeCypher(req,res) {
        this._databaseService = sessionService.get(req.sessionID)
        if(!req.body) {
            res.status(500).json({msg: 'Empty Query'})
        }
        try {
            const result = await this._databaseService.executeQurey(req.body.cmd)
            res.status(200).json(result)
        } catch(err) {
            res.status(500).json({msg: `${err}`})
        }
    }
}

module.exports = DatabaseController