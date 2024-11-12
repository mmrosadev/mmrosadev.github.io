import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;  
    padding: 20px;

    @media screen and (max-width: 375px) {
        width: 100%;
    }
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: 100%;
    padding-bottom: 64px;

    @media screen and (min-width: 769px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 128px;
    }
    
`

export const TecnologyRectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const Photo = styled.img`
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: linear-gradient(to right, #1BCF6C , #7159C1);
    padding: 8px;
    margin: 32px 0px 16px 0px;
    
    @media screen and (min-width: 701px) {
        margin: 64px 0px 32px 0px;
    }
`

export const TitleContainer = styled.div`
    width: max-content;
    margin: 16px 0px 32px 0px;
`

export const Title = styled.span`
    color: #fff;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: italic;
`