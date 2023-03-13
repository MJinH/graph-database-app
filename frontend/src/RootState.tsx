import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './features/alert/AlertSlice'
import databaseReducer from './features/database/DatabaseSlice'
import metadataReducer from './features/meta/MetadataSlice'
import cypherReducer from './features/cypher/CypherSlice'
import renderReducer from './features/three/RenderSlice'

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    alertReducer,
    databaseReducer,
    metadataReducer,
    cypherReducer,
    render: renderReducer,
})


export const store = configureStore({
    reducer: rootReducer
})


export type AppDispatch = typeof store.dispatch