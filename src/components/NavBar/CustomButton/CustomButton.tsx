import React from 'react'
import { Button } from './styles'

interface CustomButtonProps {
    size?: 'small' | 'middle' | 'big'
    children?: React.ReactNode
    onClick: () => void
}

export function CustomButton({
    size = 'big',
    children,
    onClick
}: CustomButtonProps) {
    return (
        <Button
            type="button"
            size={size}
            onClick={onClick}
        >
            {children && children}
        </Button>
    )
}