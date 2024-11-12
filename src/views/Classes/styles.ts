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

export const Main = styled.main`
    width: 100%;
    max-width: 1200px;
    padding: 128px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 425px){
        padding: 64px 0px;
    }
`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 375px){
        padding: 10px;
    }
`

export const Title = styled.span`
    color: #fff;
    font-size: 28px;
    font-weight: 700;

    @media screen and (max-width: 375px){
        font-size: 20px;
    }
`

export const TitleIcon = styled.img`
    width: 94px;
    height: 128px;
`

export const TextContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Text = styled.span`
    text-align: center;
    padding: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 100;
`

export const ButtonContainer = styled.div`
    margin-top: 24px;
    width: 180px;
    height: 60px;
`

export const AdvantagesCardsContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 40px 0px;
    @media screen and (max-width: 540px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 541px) and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const AdvantagesCard = styled.div`
    background-color: #1E1D26;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 240px;
    min-height: 300px;
`

export const CardIcon = styled.img`
    height: 100%;
    width: 100%;
`

export const WrapperCardIcon = styled.div`
    height: 160px;
    width: 128px;
`

export const CardLabel = styled.span`
    text-align: center;
    padding: 10px 0px;
    color: #fff;
    font-size: 16px;
    font-weight: 100;

    width: 200px;
`