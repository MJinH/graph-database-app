import { createSlice } from "@reduxjs/toolkit";


const AlertSlice = createSlice({
    name: "alert",
    initialState: {
        status: "Database disconnected. Please connect to database."
    },
    reducers: {
        setAlert: (state, {payload}) => {
            state.status = payload.status
        }
    }
})

export const { setAlert } = AlertSlice.actions
export default AlertSlice.reducer