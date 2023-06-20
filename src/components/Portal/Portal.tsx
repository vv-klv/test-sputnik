import React, { ReactHTMLElement, useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import cl from './Portal.module.scss'

interface IPortal {
    children: React.ReactNode
    portalRef?: React.Ref<HTMLDivElement>
}

const modals = document.getElementById('modals') as HTMLElement

const Portal = ({ children, portalRef }: IPortal) => {
    return (
        modals &&
        ReactDOM.createPortal(
            <div
                className={cl.portal}
                ref={portalRef}

            >
                <div onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>,
            modals
        )
    );
}

export default Portal
