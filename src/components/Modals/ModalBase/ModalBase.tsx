import React from 'react'
import { Link } from 'react-router-dom'
import cl from './ModalBase.module.scss'
import emailImg from '../../../assets/images/email.svg'

interface IModalBaseProps {
    children: React.ReactNode
    handleCloseModal: React.MouseEventHandler<HTMLButtonElement>
}

const sendEmail = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    window.location.href = "mailto:lonst.konst.konst@yandex.ru"
    e.preventDefault()
}

const ModalBase = ({ children, handleCloseModal }: IModalBaseProps) => {
    return (
        <div className={cl.modalWrapper}>
            <div className={cl.modalTop}>
                <h2 className={cl.modalTitle}><b>Web </b>App</h2>
                <button className={cl.modalClose} onClick={handleCloseModal} aria-label="close modal"/>
            </div>

            {children}

            <Link className={cl.modalSupport} onClick={e => sendEmail(e)} to="#">
                <img src={emailImg} alt="Write to support"/>
                <span>Написать в поддержку</span>
            </Link>
        </div>
    )
}

export default ModalBase
