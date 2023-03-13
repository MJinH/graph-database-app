import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import uuid from 'react-uuid'

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


const CypherSlice = createSlice({
    name: 'cypher',
    initialState: {
        error: '',
        refKeys: [],
        refKey: '',
    },
    reducers: {
        setStatus: (state, {payload}) => {
        },
        setRefKeys: (state, {payload}) => {
            state.refKeys.shift()
        }
    },
    extraReducers: {
        [executeCypher.rejected]: () => ({
            error: "Failed to execute cypher query",
            cmd: "",
        }),
        [executeCypher.fulfilled]: (state, action) => {
            if (!state.refKeys) state.refKeys = []
            state.refKey = uuid()
            state.refKeys?.push({
                rows: action.payload.rows,
                command: action.payload.command,
                rowCount: action.payload.rowCount,
                columns: action.payload.columns,
                refKey: state.refKey,
            })
        }
    }
})

export const { setStatus, setRefKeys } = CypherSlice.actions
export default CypherSlice.reducer