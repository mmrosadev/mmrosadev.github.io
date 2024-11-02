import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0px 40px 0px;

    background: 
    linear-gradient(to top, rgba(94, 130, 230, 0.1) 100%, rgba(142, 68, 173, 0) 100%);
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
    padding: 20px 20px 40px 20px;
    background-color: rgba(217, 217, 217, 0.3);
`

export const TitleContainer = styled.div`
    margin: 40px 0px;
`

export const Title = styled.span`
    color: #301C41;
    font-size: 32px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
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