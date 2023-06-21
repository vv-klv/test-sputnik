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

    const handleOpenModal = (modal?: string) => {
        setIsPortalOpen(false)
        setOpenedModal(modal ?? '')
        console.log(modal)
        setTimeout(() => {
            setIsPortalOpen(true)
        }, 150)
    }

    const handleCloseModal = useCallback(() => {
        setIsPortalOpen(false)
        setOpenedModal('')
    }, [])

    const portalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event

            if (target instanceof Node && portalRef.current === target) {
                handleCloseModal()
            }
        }

        window.addEventListener('click', handleWrapperClick)

        return () => {
            window.removeEventListener('click', handleWrapperClick);
        }
    }, [handleCloseModal])

    return (
        <div className={cl.container}>
            <Button handleClick={handleOpenModal} currentModal='login'>
                Авторизация
            </Button>
            {
                isPortalOpen &&
                <Portal portalRef={portalRef} >
                        <ModalBase handleCloseModal={handleCloseModal}>
                            {
                                openedModal === 'login' &&
                                <ModalLogin handleOpenModal={handleOpenModal}/>
                            }
                            {
                                openedModal === 'forgot_password' &&
                                <ModalForgotPassword handleOpenModal={handleOpenModal}/>
                            }
                            {
                                openedModal === 'register' &&
                                <ModalRegister handleOpenModal={handleOpenModal}/>
                            }
                        </ModalBase>
                </Portal>
            }

        </div>
    )
}

export default AppContainer
