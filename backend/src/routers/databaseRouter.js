
const express = require('express')
const {wrap} = require('../wrap/wrap')
const DatabaseController = require('../controllers/databaseController')
const databaseController = new DatabaseController()
const router = express.Router()

router.get('/', wrap(databaseController.getConnectionStatus))
router.post('/connect', wrap(databaseController.connectDatabase))
router.post('/executeCypher', wrap(databaseController.executeCypher))
router.get('/disconnect', wrap(databaseController.disconnectDatabase))
router.get('/meta', wrap(databaseController.getMetadata))

module.exports = router



