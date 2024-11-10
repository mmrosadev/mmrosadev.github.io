import styled from 'styled-components'

interface TootleNavBarProps {
    open: boolean
}

interface IconProps {
    size?: 'small' | 'big'
}

export const NavBarContainer = styled.nav`
    width: 100%;
    height: 80px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #18171D;
    top: 0;
    left: 0;
    right: 0;
    position: sticky;
    z-index: 1000;


    /* @media screen and (min-width: 701px) {

    } */

    @media screen and (max-width: 700px) {
        flex-direction: column-reverse;
    }
`

export const NavBarLinksContainer = styled.div<TootleNavBarProps>`

    background-color: #18171D;
    transition: 0.1s;
    display: flex;
    
    @media screen and (min-width: 701px) {
        flex-direction: row; 
        justify-content: center;
        align-items: center;

        width: 80%;
        max-width: 1200px;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
        position: absolute;
        top: 80px;
        right: 0;
        width: 100%;
        display: ${props => props.open ? 'flex' : 'none'};
    }
`

export const UnorderedList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    width: 100%;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        padding: 8px;
    }
`

export const ListItem = styled.li`
    position: relative;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
`

export const Logo = styled.img`
    width: 40px;
    height: 40px;
`

export const Icon = styled.img<IconProps>`
    ${({ size }) => size === 'small' && `
        width: 20px;
        height: 20px;
    `}

    ${({ size }) => size === 'big' && `
        width: 28px;
        height: 28px;
    `}

    ${({ size }) => size === undefined && `
        width: 100%;
        height: 100%;
    `}
`

export const FlagsContainer = styled.div<TootleNavBarProps>`


    @media screen and (min-width: 701px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
    }

    position: initial;

    /* @media screen and (max-width: 700px) {
        position: static;
        display: ${props => props.open ? 'flex' : 'none'};
        flex-direction: row;
        justify-content: space-between;
    } */

    /* @media screen and (max-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        width: 110px;
    } */
`

export const MenuButton = styled.button<TootleNavBarProps>`
    width: 36px;
    height: 36px;

    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);

    display: ${props => props.open ? 'none' : 'flex'};

    @media screen and (min-width: 701px) {
        display: none;
    }
`

export const CrossButton = styled.button<TootleNavBarProps>`
    width: 20px;
    height: 20px;

    position: absolute;
    right: 12px;

    display: ${props => props.open ? 'flex' : 'none'};

    @media screen and (min-width: 701px) {
        display: none;
    }
`