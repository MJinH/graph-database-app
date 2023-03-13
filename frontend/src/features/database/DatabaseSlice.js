import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDatabaseStatus = createAsyncThunk(
    'database/connectionStatus',
    async() => {
        try {
            const response = await fetch('/api/graph/db')
            if (response.ok) {
                return await response.json()
            }
            throw response
        } catch(err) {
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

export const connectToDatabase = createAsyncThunk(
    'database/connectDatabase',
    async(formData) => {
        try{
            const response = await fetch('/api/graph/db/connect', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                return await response.json()
            }
            throw response
        } catch(err) {
            const errorJson = await err.json()
            const errorDetail = {
                name: 'Failed to connect to database',
                message: `[${errorJson.severity}]:(${errorJson.code}) ${errorJson.Message}`,
                statusText: err.statusText
            }
            throw errorDetail
        }
    }
)

const DatabaseSlice = createSlice({
    name: "database",
    initialState: {
        databaseStatus: "disconnected",
        error: "",
        cmd: "",
    },
    reducers: {
        setError: (state, {payload}) => {
            state.error = payload.error
        }
    },
    extraReducers: {
        [getDatabaseStatus.fulfilled]: (state, action) => ({
            host: action.payload.host,
            database: action.payload.database,
            user: action.payload.user,
            port: action.payload.port,
            databaseStatus: "connected",
            error: "",
        }),
        [getDatabaseStatus.rejected]: () => ({
            host: "",
            database: "",
            user: "",
            port: "",
            databaseStatus: "disconnected",
            error: "",
        }),
        [connectToDatabase.fulfilled]: (state, action) => ({
            host: action.payload.host,
            database: action.payload.database,
            user: action.payload.user,
            port: action.payload.port,
            databaseStatus: "connected",
            error: "",
        }),
        [connectToDatabase.rejected]: () => ({
            host: "",
            database: "",
            user: "",
            port: "",
            databaseStatus: "disconnected",
            error: "Failed to connect to database",
        })
    }
})

export const { setError } = DatabaseSlice.actions
export default DatabaseSlice.reducer