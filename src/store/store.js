import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(apiSlice.middleware),
    devTools: true
})