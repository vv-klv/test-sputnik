import React from 'react'
import cl from './ButtonLink.module.scss'

interface IButtonProps {
    children: React.ReactNode
    handleClick?: (modal?: string) => void
    currentModal?: string
}

const ButtonLink = ({ children, handleClick, currentModal }: IButtonProps) => {
    return (
        <button
            className={cl.buttonLink}
            onClick={() => handleClick?.(currentModal)}
        >
            {children}
        </button>
    )
}

export default ButtonLink
