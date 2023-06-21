import React from 'react'
import Button from "../../Button/Button"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Input from "../../Input/Input"
import cl from './ModalLogin.module.scss'

interface IModalLoginProps {
    handleOpenModal: (modal?: string) => void
}

const ModalLogin = ({ handleOpenModal }: IModalLoginProps) => {
    const placeholder = "konst.konst.konst@yandex.ru"

    return (
        <div className={cl.modalLogin}>
            <form className={cl.modalLoginForm}>
                <h3>Войдите в свой профиль</h3>
                <label htmlFor="login">Логин</label>
                <Input placeholder={placeholder} name="login" id="login" />
                <label htmlFor="pass">Пароль</label>
                <Input placeholder={placeholder} name="pass"  id="pass" type="password" autocomplete="on" />
                <Button
                    classname={cl.modalLoginButton}
                    type="submit"
                >
                    Войти
                </Button>
            </form>
            <ButtonLink handleClick={handleOpenModal} currentModal='forgot_password'>
                Я забыл пароль
            </ButtonLink>
            <ButtonLink handleClick={handleOpenModal} currentModal='register'>
                Регистрация
            </ButtonLink>
        </div>
    )
}

export default ModalLogin
