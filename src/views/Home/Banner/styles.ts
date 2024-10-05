import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    justify-content: center;
    padding-top: 20px;

    background: 
        linear-gradient(to bottom, rgba(65, 59, 107, 1) 0%, rgba(26, 188, 156, 0) 58%),
        linear-gradient(to top, rgba(94, 130, 230, 1) 100%, rgba(142, 68, 173, 0) 100%);


    @media screen and (max-width: 700px) {
        flex-direction: column;
    }

    @media screen and (max-width: 320px) {
        height: 280px;
    }

    @media screen and (min-width: 321px) and (max-width: 425px) {
        height: 300px;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;

    @media screen and (min-width: 1001px){
        width: 60%;
    }

    @media screen and (min-width: 1300px){
        width: 40%;
    }


    @media screen and (min-width: 701px) and (max-width: 1000px){
        width: 80%;
    }

    @media screen and (max-width: 700px){
        width: 100%;
    }

    @media screen and (max-width: 390px) {
        justify-content: space-around;
    }
`

export const TextContainer = styled.div`
    width: 50%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;

    @media screen and (max-width: 700px) {
        height: 100%;
        width: auto;
    }
`

export const TitleContainer = styled.div`
    height: 60px;
`
export const Title = styled.span`
    font-size: 36px;

    @media screen and (min-width: 391px) and (max-width: 490px) {
        font-size: 32px;
    }

    @media screen and (max-width: 390px) {
        font-size: 28px;
    }
`

export const SubTitle = styled.span`
    font-size: 20px;

    @media screen and (min-width: 391px) and (max-width: 540px) {
        font-size: 16px;
    }

    @media screen and (max-width: 390px) {
        font-size: 12px;
    }
`

export const PhotoContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
`

export const Photo = styled.img`
    height: 100%;
    width: auto;

    @media screen and (max-width: 490px) {
        height: 80%;
    }
`