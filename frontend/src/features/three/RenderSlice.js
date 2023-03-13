import { createSlice } from "@reduxjs/toolkit";

const RenderSlice = createSlice({
    name: 'render',
    initialState: {
        renderThree: false,
        inputData: {},
        currRef: '',
    },
    reducers: {
        setRender: (state, {payload}) => {
            state.renderThree = payload.render
        },
        setInput: (state, {payload}) => {
            const nodes = payload.nodes
            const links = payload.links
            state.inputData[payload.refKey] = { 
              nodes,
              links,
            }
        },
        setRef: (state, {payload}) => {
            state.currRef = payload.refKey
        }
    }
})

export const { setRender, setInput, setRef } = RenderSlice.actions
export default RenderSlice.reducer