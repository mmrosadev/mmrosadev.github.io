import { ReactNode } from 'react'
import { CustomNavLink } from './styles'

interface NavBarLinkProps {
    to: string
    children?: ReactNode
    size?: 'small' | 'big'
}

export function NavBarLink({ to, children, size = 'big' }: NavBarLinkProps) {
    return (
        <CustomNavLink to={to} size={size}>
            {!!children && children}
        </CustomNavLink>
    )
}