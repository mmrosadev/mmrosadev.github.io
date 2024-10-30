import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 20px 0px;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px 40px 0px;
`

export const Title = styled.span`
    color: #301C41;
    font-size: 32px;
`

export const ProjectsContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
`