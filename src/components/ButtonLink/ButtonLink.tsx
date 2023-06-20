import React from 'react'
import cl from './ButtonLink.module.scss'

interface IButtonProps {
    children: React.ReactNode
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonLink = ({ children, handleClick }: IButtonProps) => {
    return (
        <button
            className={cl.buttonLink}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default ButtonLink
