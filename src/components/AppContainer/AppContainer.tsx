import React, { useCallback, useEffect, useRef, useState } from "react"
import Button from "../Button/Button"
import ModalForgotPassword from "../Modals/ModalForgotPassword/ModalForgotPassword"
import ModalRegister from "../Modals/ModalRegister/ModalRegister"
import Portal from "../Portal/Portal"
import ModalBase from "../Modals/ModalBase/ModalBase"
import ModalLogin from "../Modals/ModalLogin/ModalLogin"
import cl from "./AppContainer.module.scss"

function AppContainer() {
    const [isPortalOpen, setIsPortalOpen] = useState(false)
    const [openedModal, setOpenedModal] = useState('')

    const handleOpenLogin = () => {
        setIsPortalOpen(false)
        setOpenedModal('login')
        setTimeout(() => {
            setIsPortalOpen(true)
        }, 150)
    }
    const handleOpenForgotPassword = () => {
        setIsPortalOpen(false)
        setOpenedModal('forgot_password')
        setTimeout(() => {
            setIsPortalOpen(true)
        }, 150)
    }
    const handleOpenRegistration = () => {
        setIsPortalOpen(false)
        setOpenedModal('register')
        setTimeout(() => {
            setIsPortalOpen(true)
        }, 150)
    }

    const handleClose = useCallback(() => {
        setIsPortalOpen(false)
        setOpenedModal('')
    }, [])

    const portalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event

            if (target instanceof Node && portalRef.current === target) {
                handleClose()
            }
        }

        window.addEventListener('click', handleWrapperClick)

        return () => {
            window.removeEventListener('click', handleWrapperClick);
        }
    }, [handleClose])

    return (
        <div className={cl.container}>
            <Button handleClick={handleOpenLogin}>
                Авторизация
            </Button>
            {
                isPortalOpen &&
                <Portal portalRef={portalRef} >
                        <ModalBase handleClose={handleClose}>
                            {
                                openedModal === 'login' &&
                                <ModalLogin
                                    handleForgotPassword={handleOpenForgotPassword}
                                    handleRegistration={handleOpenRegistration}
                                />
                            }
                            {
                                openedModal === 'forgot_password' &&
                                <ModalForgotPassword
                                    handleLogin={handleOpenLogin}
                                    handleRegistration={handleOpenRegistration}
                                />
                            }
                            {
                                openedModal === 'register' &&
                                <ModalRegister
                                    handleForgotPassword={handleOpenForgotPassword}
                                    handleLogin={handleOpenLogin}
                                />
                            }
                        </ModalBase>
                </Portal>
            }

        </div>
    )
}

export default AppContainer
