import React from 'react'
import cl from './Button.module.scss'

interface IButtonProps {
    children: React.ReactNode
    handleClick?: (modal?: string) => void
    currentModal?: string
    classname?: string
    type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, handleClick, currentModal, classname, type = "button"}: IButtonProps) => {
    const classnames = [cl.button, classname]

    const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (type === "submit") {
            e.preventDefault()
        }
        handleClick?.(currentModal)
    }

    return (
        <button
            className={classnames.join(' ')}
            onClick={e => handleSubmit(e)}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
