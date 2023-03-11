import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './features/alert/AlertSlice'
import databaseReducer from './features/database/DatabaseSlice'
import metadataReducer from './features/meta/MetadataSlice'

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    alertReducer,
    databaseReducer,
    metadataReducer
})


export const store = configureStore({
    reducer: rootReducer
})