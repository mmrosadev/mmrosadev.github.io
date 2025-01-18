import { ReactNode } from 'react'
import { CustomNavLink } from './styles'

interface NavBarLinkProps {
    to: string
    children?: ReactNode
    size?: 'small' | 'big'
    onClick?: () => void
}

export function NavBarLink({ to, children, size = 'big', onClick }: NavBarLinkProps) {
    return (
        <CustomNavLink
            to={to}
            size={size}
            onClick={onClick}
        >
            {!!children && children}
        </CustomNavLink>
    )
}