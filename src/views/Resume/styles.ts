import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const Header = styled.div`
    width: 80%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 128px;

    @media screen and (max-width: 700px){
        padding-top: 64px;
    }

    @keyframes shake {
        0%, 100% {
            transform: translateX(0); 
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
        }
        20%, 40%, 60%, 80% {
            transform: translateX(5px);
        }
    }

    button:hover{
        animation: shake 0.5s;
    }
`

export const Title = styled.span`
    color: #7159C1;
    font-size: 18px;
    font-weight: 500;
`

export const DownloadIconWrapper = styled.button`
    width: 28px;
    height: 28px;
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`

export const ResumeContainer = styled.div`
    width: 80%;
    max-width: 1200px;
    padding-bottom: 40px;
    margin: 100px 0px 140px 0px;

    border: 1px solid #7159C1;
    border-radius: 4px;

    background-color: #1E1D26;
    color: #fff;
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
        color: #fff;
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