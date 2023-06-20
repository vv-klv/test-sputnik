import React from 'react'
import Button from "../../Button/Button"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Input from "../../Input/Input"
import cl from './ModalRegister.module.scss'

interface IModalRegisterProps {
    handleForgotPassword: () => void
    handleLogin: () => void
}

const ModalRegister = ({ handleForgotPassword, handleLogin }: IModalRegisterProps) => {
    const placeholder = "konst.konst.konst@yandex.ru"

    return (
        <div className={cl.modalRegister}>
            <form className={cl.modalRegisterForm}>
                <h3>Зарегистрируйтесь</h3>
                <label htmlFor="login">Логин</label>
                <Input placeholder={placeholder} name="login" id="login"/>
                <label htmlFor="pass">Пароль</label>
                <Input placeholder={placeholder} name="pass" id="pass" type="password" autocomplete="on" />
                <Button
                    classname={cl.modalRegisterButton}
                    type="submit"
                >
                    Зарегистрироваться
                </Button>
            </form>
            <ButtonLink handleClick={handleForgotPassword}>
                Я забыл пароль
            </ButtonLink>
            <ButtonLink handleClick={handleLogin}>
                Уже зарегистрированы? Войти
            </ButtonLink>
        </div>
    )
}

export default ModalRegister
