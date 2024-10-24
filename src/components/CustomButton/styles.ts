import styled from 'styled-components'

interface ButtonStyleProps {
    size?: 'small' | 'middle' | 'big'
}

export const Button = styled.button<ButtonStyleProps>`

    ${({ size }) => size === 'small' && `
        width: 20px;
        height: 20px;
    `}


    ${({ size }) => size === 'middle' && `
        width: 24px;
        height: 24px;
    `}


    ${({ size }) => size === 'big' && `
        width: 36px;
        height: 36px;
    `}
`
