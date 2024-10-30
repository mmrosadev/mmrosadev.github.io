import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 7px;
    padding: 20px;
    width: fit-content;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);

    @media screen and (max-width: 768px){
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 240px;
    }

    @media screen and (min-width: 1025px) and (max-width: 1440px){
        width: 320px;
    }

    @media screen and (min-width: 1440px){
        width: 400px;
    }
`

export const IconWrapper = styled.div`
    width: 64px;
    height: 64px;
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`

export const Title = styled.span`
    text-align: center;
    font-size: 16px;
    margin: 10px 0px;
    color: #301C41;
`

export const Subtitle = styled.span`
    text-align: justify;
    font-size: 12px;
    color: #301C41;
    font-family:  'Roboto';
`