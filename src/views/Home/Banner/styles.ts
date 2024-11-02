import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    background: 
        linear-gradient(to bottom, rgba(65, 59, 107, 1) 0%, rgba(26, 188, 156, 0) 58%),
        linear-gradient(to top, rgba(94, 130, 230, 1) 100%, rgba(142, 68, 173, 0) 100%);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    
    @media (min-width: 1000px) {
        flex-direction: row;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    font-family: 'Acme', sans-serif;
    margin-bottom: 20px;

    @media (min-width: 1000px) {
        text-align: left;
        justify-content: center;
        margin-bottom: 0;
    }
`

export const TitleContainer = styled.div`
    margin-bottom: 10px;
`

export const Title = styled.span`
    font-size: 2.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 425px) {
        font-size: 1.8rem;
    }
`

export const SubTitle = styled.span`
    font-size: 1.75rem;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 425px) {
        font-size: 1.3rem;
    }
`

export const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const Photo = styled.img`
    width: 90%;
    height: auto;
    max-height: 80vh;
    object-fit: cover;
    object-position: bottom;

    @media (max-width: 1000px) {
        max-height: 70vh;
    }
`