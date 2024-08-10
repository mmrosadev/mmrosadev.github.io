import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 200px) and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`

export const SectionContainer = styled.div`
    width: 24%;
    margin: 0px 20px;

    @media screen and (min-width: 200px) and (max-width: 1000px) {
        width: 90%;
    }

    @media screen and (min-width: 1001px) and (max-width: 1380px) {
        width: 34%;
    }
`

export const TecnologyRectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const MyProjectsContainer = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    margin: 0px 0px 20px 20px;
`
export const Title = styled.span`
    color: #301C41;
    font-size: 32px;
`

export const SubTitle = styled.span`
    color: #301C41;
    font-size: 16px;
`

export const Footer = styled.footer`
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 0;
`

export const FooterLinksContainer = styled.div`
    width: 100%;
    height: 86%;
    background-color: #1C0B2B;
`

export const CopyrightContainer = styled.div`
    width: 100%;
    height: 14%;
    background-color: #301C41;
    color: #fff;
    display: flex;
    align-items: center;

    @media screen and (min-width: 200px) and (max-width: 700px) {
        justify-content: center;
    }
`

export const CopyrightLabel = styled.span`
    font-size: 12px;

    @media screen and (min-width: 701px){
       margin-left: 100px;
    }

`

export const CardsContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: red;
    /* padding: 20px; */
`