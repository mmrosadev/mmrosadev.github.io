import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 30px 0px;
`

export const SectionContainer = styled.div`
    @media screen and (min-width: 701px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const TecnologyRectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const PhotoContainer = styled.div`
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #413B6B, #5C65C0); 
    margin: 20px 0;
`

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    padding: 12px;
`

export const TitleContainer = styled.div`
    width: max-content;
    margin: 10px 0px 30px 0px;
`

export const Title = styled.span`
    color: #301C41;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: italic;
`