import styled from "styled-components"

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
    width: 30%;
    margin: 0px 20px;

    @media screen and (min-width: 200px) and (max-width: 920px) {
        width: 90%;
    }
`

export const TecnologyRectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`