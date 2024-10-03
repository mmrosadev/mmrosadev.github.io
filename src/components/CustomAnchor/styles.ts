import styled from 'styled-components'

interface IconStyleProps {
    size?: 'small' | 'big'
}

export const Anchor = styled.a`
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: #fff;
`

export const Icon = styled.img<IconStyleProps>`
    width: ${({ size }) => size === 'small' ? '22px' : '28px'} ;
    height: ${({ size }) => size === 'small' ? '22px' : '28px'} ;
`

export const Label = styled.div`
    padding-left: 10px;
`