import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 0px 10px;
`

export const Header = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 700px){
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 70%;
    }

    padding: 40px 4px;

    @keyframes shake {
        0%, 100% {
            transform: translateX(0); /* Posição inicial e final sem deslocamento */
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px); /* Deslocamento para a esquerda */
        }
        20%, 40%, 60%, 80% {
            transform: translateX(5px); /* Deslocamento para a direita */
        }
    }

    button:hover{
        animation: shake 0.5s;
    }
`

export const Title = styled.span`
    color: #301C41;
    font-size: 32px;
`

export const DownloadIconWrapper = styled.button`
    width: 32px;
    height: 32px;
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`

export const ResumeContainer = styled.div`
    *{
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    width: 70%;

    border: 10px solid #301C41;
    border-radius: 2px;
    @media screen and (max-width: 768px){
        width: 100%;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 70%;
    }

    background-color: #fff;
    color: #000;
    margin-bottom: 40px;

`

export const ResumeHeader = styled.div`
    width: 100%;
    padding: 40px 0px 50px 0px;


    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 700px){
        padding: 40px 0px 50px 0px;
    }

    a{
        text-decoration: none;
        color: #000;
    }

`

export const TitleHeader = styled.span`
    font-size: 28px;
    font-weight: bold;

    @media screen and (max-width: 700px){
        font-size: 14px;
    }
`

export const SubtitleHeader = styled.span`
    font-size: 22px;

    @media screen and (max-width: 700px){
        font-size: 12px;
    }
`

export const Section = styled.div`
    width: 100%;
    padding: 10px 30px;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px){
        padding: 10px;
    }
`

export const TitleSection = styled.span`
    font-size: 22px;
    font-weight: bold;

    @media screen and (max-width: 700px){
        font-size: 14px;
    }

    padding-bottom: 20px;
`

export const ContentSection = styled.span`
    font-size: 22px;
    text-align: justify;
    @media screen and (max-width: 700px){
        font-size: 12px;
    }
    margin-bottom: 20px;
`

export const UL = styled.ul`
    margin-left: 10px;
`

export const LI = styled.li`
    margin-left: 10px;

`