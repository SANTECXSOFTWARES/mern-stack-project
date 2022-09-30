import '../fake-db'
import React from 'react'
// import { Store } from './redux/Store'
import { Provider } from 'react-redux'
import { AllPages } from './routes/routes'
import { MatxTheme } from 'app/components'
import { useRoutes } from 'react-router-dom'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices'

const store = configureStore({reducer: rootReducer})

const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <AuthProvider>{all_pages}</AuthProvider>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
}

export default App
