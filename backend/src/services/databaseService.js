import { setAGETypes } from '../driver/AGEParser'
import * as util from 'util'
import { getQuery } from '../path/path'
const pg = require('pg')
const pgConfig = require('../config/pgConfig')

class DatabaseService {

    constructor() {
        this._database = null
        this._pool = null
        this._graphs = []
    }

    isConnected() {
        return this._database != null
    }

    async connectDatabase(connectInfo) {
        try {
            const poolConfig = this.getPgConfig(connectInfo)
            this._pool = new pg.Pool(poolConfig)
            const client = await this._pool.connect()
            this._database = poolConfig
            client.release()
        } catch(err) {
            throw err
        }
        return true
    }

    async disconnectDatabase() {
        if (!this._database) {
            return false
        }
        const releaseStatus = this.releaseConnection()
        if (releaseStatus) {
            this._database = null
            return true
        } else {
            return false
        }
    }

    async executeCypher(query) {
        const client = await this.getConnection()
        let result = null
        try {
            result = await client.query(query,[])
        } catch(err) {
            throw err
        } finally {
            client.release()
        }
        return result
    }

    async releaseConnection() {
        try {
            this._pool.end()
            return true
        } catch(err) {
            throw err
        }
    }

    async getConnection() {
        const client = await this._pool.connect()

        await setAGETypes(client, pg.types)

        return client
    }

    async getMetadata() {
        let metaData = {}
        try {
            await this.getGraphs()
            let result = await this.executeCypher(util.format(getQuery('meta_data'), this._graphs[0]))
            const { edges, nodes } = this.parseMetadata(result)
            metaData.edges = edges
            metaData.nodes = nodes
            metaData.graph = this._graphs[0]
        } catch(err) {
            throw err
        }
        return metaData
    }

    async getGraphs() {
        const graphs = await this.executeCypher('SELECT * FROM ag_catalog.ag_graph;')
        this._graphs = graphs.rows.map((graph) => graph.name)
    }

    getPgConfig(connectInfo) {
        return {
            host: connectInfo.host,
            port: connectInfo.port,
            password: connectInfo.password,
            database: connectInfo.database,
            user: connectInfo.user,
            max: pgConfig.max,
            connectionTimeoutMillis: pgConfig.connectionTimeoutMillis,
        }
    }

    getConnectionInfo() {
        return this._database
    }

    parseMetadata(result) {
        const metaData = {
            edges: [],
            nodes: [],
        }

        result.rows.map((row) => {
            if (row.kind === 'v' && row.label !== '_ag_label_vertex') {
                metaData.nodes.push({name: row.name, cnt: row.cnt})
            }
            if (row.kind === 'e' && row.label !== '_ag_label_edge') {
                metaData.edges.push({name:row.name, cnt: row.cnt})
            }
        })

        return metaData
    }


}


module.exports = DatabaseService


