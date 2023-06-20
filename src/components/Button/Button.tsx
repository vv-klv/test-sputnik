import React from 'react'
import cl from './Button.module.scss'

interface IButtonProps {
    children: React.ReactNode
    handleClick?: () => void
    classname?: string
    type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, handleClick, classname, type = "button"}: IButtonProps) => {
    const classnames = [cl.button, classname]

    return (
        <button
            className={classnames.join(' ')}
            onClick={handleClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
