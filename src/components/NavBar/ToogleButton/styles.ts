import styled from 'styled-components'

interface ButtonStyleProps {
    open: boolean
}

export const Button = styled.button<ButtonStyleProps>`
    background-color: transparent;
    width: 36px;
    height: 36px;
    border: none;
    padding: 4px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & div {
        width: 30px;
        height: 4px;
        background-color: #fff;
        position: absolute;
        transition: 0.4s ease;
    }

    & div:nth-child(1) {
        top: 6px;
    }
    
    & div:nth-child(2) {
        top: 16px;
    }
    
    & div:nth-child(3) {
        top: 26px;
    }
    
    ${({ open }) => open && `
        & div:nth-child(1) {
            transform: rotate(45deg);
            top: 16px;
        }
        
        & div:nth-child(2) {
            opacity: 0;
        }
        
        & div:nth-child(3) {
            transform: rotate(-45deg);
            top: 16px;
        }
    ` }

`