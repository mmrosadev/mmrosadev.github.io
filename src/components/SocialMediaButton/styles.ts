import styled from 'styled-components'


interface AnchorStyleProps {
    $imageSource: string
    size?: 'small' | 'big'
}

export const Anchor = styled.a<AnchorStyleProps>`
    width: ${({ size }) => size === 'small' ? '22px' : '28px'} ;
    height: ${({ size }) => size === 'small' ? '22px' : '28px'} ;

    background: url(${({ $imageSource }) => $imageSource}) no-repeat center center ;
    background-size: cover;
`