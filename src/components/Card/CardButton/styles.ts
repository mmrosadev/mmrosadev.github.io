import styled from 'styled-components'

interface IconStyleProps {
    width?: number
    height?: number
}

export const Button = styled.a`
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #301C41;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0px 0px 0px;
    margin: 0 !important;
    text-decoration: none;
`

export const Icon = styled.img<IconStyleProps>`
    width: ${({ width }) => width ? width : 20}px;
    height: ${({ height }) => height ? height : 20}px;
`

export const Label = styled.label`
    color: #fff;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
`