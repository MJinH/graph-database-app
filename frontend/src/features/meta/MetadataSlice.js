import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getMetadata = createAsyncThunk(
    'database/getMetadata',
    async() => {
        try {
            const response = await fetch('/api/graph/db/meta')
            if (response.ok) {
                return await response.json()
            }
            throw response
        } catch (err) {
            const errorJson = await err.json()
            const errorDetail = {
                name: "Database is not connected",
                message: `[${errorJson.severity}]:(${errorJson.code}) ${errorJson.Message}`,
                statusText: err.statusText
            }
            throw errorDetail
        }
    }
)

export const executeCypher = createAsyncThunk(
    'database/exeucteCypher',
    async(query) => {
        try {
            const response = await fetch('/api/graph/db/executeCypher', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(query)
            })
            if (response.ok) {
                return await response.json()
            }
            throw response
        } catch(err) {
            const errorJson = await err.json()
            const errorDetail = {
                name: 'Failed to execute cypher query',
                message: `[${errorJson.severity}]:(${errorJson.code}) ${errorJson.Message}`,
                statusText: err.statusText
            }
            throw errorDetail
        }
    }
)

const MetadataSlice = createSlice({
    name: 'meta',
    initialState: {
        graph: '',
        edges: [],
        nodes: [],
    },
    extraReducers: {
        [getMetadata.fulfilled]: (state, action) => ({
            graph: action.payload.graph,
            edges: action.payload.edges,
            nodes: action.payload.nodes,
        }),
        [getMetadata.rejected]: () => ({
            graph: '',
            edges: [],
            nodes: [],
        })
    }
})

export default MetadataSlice.reducer