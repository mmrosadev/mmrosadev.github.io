import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
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

export const MyProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    background-color: rgba(217, 217, 217, 0.3);
`

export const TitleContainer = styled.div`
    margin-bottom: 40px;
`

export const Title = styled.span`
    color: #301C41;
    font-size: 32px;
`

export const SwiperWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Services = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    place-items: center;
    width: 100%;
    padding: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

    @media screen and (min-width: 1440px){
        width: 80%;
    }

`