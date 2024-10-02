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
        color: #6f95ff;
    }

    &:hover::after{
        content: "";
        width: 30%;
        height: 2px;
        background: #6f95ff;
        position: absolute;
        bottom: 4px;
        left: 11px;
    }

    @media screen and (max-width: 700px) {

        &:hover, &:focus{
            border-left: 2px solid #6f95ff;
            padding-left: 6px;
        }

        &:hover::after{
            width: 0;
        }
    }
`