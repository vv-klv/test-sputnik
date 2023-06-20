import React from "react"
import ReactDOM from "react-dom"
import cl from './Portal.module.scss'

const modals = document.getElementById('modals') as HTMLElement

interface IPortal {
    children: React.ReactNode
}

const Portal = ({ children }: IPortal) => {
    return (
        modals &&
        ReactDOM.createPortal(
            <div className={cl.portal}>{children}</div>,
            modals
        )
    );
}

export default Portal
