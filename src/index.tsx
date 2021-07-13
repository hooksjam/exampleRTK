/* eslint @typescript-eslint/no-unsafe-member-access: 0 */
/* eslint @typescript-eslint/no-unsafe-call: 0 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from 'app/App'
import { store } from 'app/store'
import { serviceWorker } from 'helpers/ServiceWorker'

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef
}

render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('app'),
)

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
