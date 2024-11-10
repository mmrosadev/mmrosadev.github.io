import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 140px 0px;
`

export const TitleContainer = styled.div`
    margin-bottom: 24px;
    text-align: center;
`

export const Title = styled.span`
    color: #7159C1;
    font-size: 18px;
    font-weight: 500;
`

export const SubtitleContainer = styled.div`
    margin-bottom: 64px;
    text-align: center;
`

export const Subtitle = styled.span`
    color: #fff;
    font-size: 20px;
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