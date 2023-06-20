import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import AppContainer from "./components/AppContainer/AppContainer"
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <AppContainer />
    </React.StrictMode>
)
