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
            state.currRef = payload.refKey
        },
        setRef: (state, {payload}) => {
            state.currRef = payload.refKey
        }
    }
})

export const { setRender, setInput } = RenderSlice.actions
export default RenderSlice.reducer