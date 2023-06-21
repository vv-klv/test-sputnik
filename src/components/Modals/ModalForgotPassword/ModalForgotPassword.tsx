import React from 'react'
import Button from "../../Button/Button"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Input from "../../Input/Input"
import cl from './ModalForgotPassword.module.scss'

interface IModalLoginProps {
    handleOpenModal: (modal?: string) => void
}

const ModalForgotPassword = ({ handleOpenModal }: IModalLoginProps) => {
    const placeholder = "konst.konst.konst@yandex.ru"

    return (
        <div className={cl.modalForgotPassword}>
            <form className={cl.modalForgotPasswordForm}>
                <h3>Введите логин</h3>
                <label htmlFor="login">Логин</label>
                <Input placeholder={placeholder} name="login" id="login"/>
                <Button
                    classname={cl.modalForgotPasswordButton}
                    type="submit"
                >
                    Отправить код
                </Button>
            </form>
            <ButtonLink handleClick={handleOpenModal} currentModal='register'>
                Регистрация
            </ButtonLink>
            <ButtonLink handleClick={handleOpenModal} currentModal='login'>
                Уже зарегистрированы? Войти
            </ButtonLink>
        </div>
    )
}

export default ModalForgotPassword
