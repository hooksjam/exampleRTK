import { combineReducers } from '@reduxjs/toolkit'
import appReducer from 'actions/appActions'

const rootReducer = combineReducers({
    app: appReducer,
})

export default rootReducer
