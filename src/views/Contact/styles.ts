import styled from 'styled-components'


interface IconProps {
    size?: 'small' | 'big'
}


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const ContactContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a{
        color: #301C41;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
`

export const Icon = styled.img<IconProps>`
    ${({ size }) => size === 'small' && `
        width: 22px;
        height: 22px;
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