import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
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

export const MyServicesContainer = styled.div`
    padding: 140px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;

    @media screen and (max-width: 700px){
        padding: 70px 0px;
    }
`

export const MyProjectsContainer = styled.div`
    padding: 140px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;

    @media screen and (max-width: 700px){
        padding: 70px 0px;
    }
`

export const ProjectsContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 601px) and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 64px;
    min-width: 260px;
    height: 60px;
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


    @keyframes pull {
        0%,100%{
            transform: translateY(-40px);
        }

        10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% {
            transform: translateY(1px); 
        }
    }

    & > div:nth-child(-n+3){
        animation: pull 5s infinite;
    }

`