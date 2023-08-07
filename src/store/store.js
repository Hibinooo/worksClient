import { configureStore } from '@reduxjs/toolkit'
import { timesApi } from './timesApi'
import { worksApi } from './worksApi'

export const store = configureStore({
    reducer:{
        [timesApi.reducerPath]: timesApi.reducer,
        [worksApi.reducerPath]: worksApi.reducer,
    },
    middleware:(getDefaultMiddlware) => getDefaultMiddlware().concat(timesApi.middleware, worksApi.middleware)
})