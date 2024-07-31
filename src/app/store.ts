import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import {apiSlice} from '../features/dogs/dogs-api-slice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDeafaultMiddleware)=>{
        return getDeafaultMiddleware().concat(apiSlice.middleware)
    }

})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType <typeof store.getState>;