import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import rootReducer, { RootState } from 'app/reducer'

const preloadedState = {}
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
