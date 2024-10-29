import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;

    span{
        font-family: 'Roboto', Arial, sans-serif;
    }
`

export const TextContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 50%;

    @media screen and (max-width: 425px){
        width: 90%;
    }

    @media screen and (min-width: 426px) and (max-width: 1024px){
        width: 60%;
    }
`

export const Text = styled.span`
    text-align: justify;
    padding: 20px 0px;
`

export const Item = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
`

export const Label = styled.span`
    padding-left: 10px;
`

export const IconWrapper = styled.div`
    width: 18px;
    height: 18px;
`

export const Icon = styled.img`
    width: 18px;
    height: 18px;
`

export const ButtonContainer = styled.div`
    margin: 50px 0px;
`

export const Button = styled.a`
    padding: 10px;
    display: flex;
    align-items: center;
    background-color: #1C0B2B;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    text-decoration: none;
`


export const ButtonIconWrapper = styled.div`
    width: 22px;
    height: 22px;
`

export const ButtonIcon = styled.img`
    width: 22px;
    height: 22px;
`