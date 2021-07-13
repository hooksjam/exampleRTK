import React, { useState, useEffect } from 'react'
import { Spinner } from 'components'
import { load } from 'actions/appActions'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { RootState } from 'app/types'

import '../style/App.scss'
import '../style/animate.min.css'

export function App() {
    const dispatch = useAppDispatch()
    const initialized = useAppSelector((state:RootState) => state.app.initialized)

    useEffect(async () => {
        await dispatch(load())
    })

    return (
        <React.Fragment>
            <Spinner></Spinner>
        </React.Fragment>
    )
}

export default App
