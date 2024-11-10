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

    padding: 20px;
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    width: 60rem;

    @media screen and (min-width: 701px) {
        width: 80rem;
        grid-template-columns: repeat(2, 1fr);
    }
    padding-bottom: 20px;
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
    margin: 16px 0;
    padding: 8px;
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