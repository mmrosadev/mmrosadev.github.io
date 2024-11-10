import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface CustomNavLinkStyleProps {
    size?: 'small' | 'big'
}

export const CustomNavLink = styled(NavLink) <CustomNavLinkStyleProps>`

    color: #fff;
    font-size: ${({ size }) => size === 'small' ? '0.8rem' : '1.0rem'};
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover, &:focus{
        color: #7159C1;
    }

    &.active{
        color: #7159C1;
    }
`