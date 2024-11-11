import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    height: 500px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
  
    @media screen and (min-width: 321px) and (max-width: 425px) {
        height: 450px;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 840px){
        flex-direction: column;
        align-items: center;
    }
`

export const Wrapper = styled.div`
    width: 50%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: white;

    @media screen and (max-width: 840px){
        align-items: center;
        width: 100%;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 840px){
        align-items: center;
        width: 100%;
    }
`

export const Title = styled.span`
    font-size: 32px;

    @media screen and (max-width: 1442px){
        font-size: 28px;
    }

    @media screen and (max-width: 916px){
        font-size: 24px;
    }

    @media screen and (max-width: 790px){
        font-size: 20px;
    }
`

export const SubTitle = styled.span`
    padding-top: 10px;
    font-size: 32px;
    color: #7159C1;
 
    @media screen and (max-width: 1442px){
        font-size: 28px;
    }

    @media screen and (max-width: 916px){
        font-size: 24px;
    }

    @media screen and (max-width: 790px){
        font-size: 20px;
    }
`

export const PhotoContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 10px;

    @media screen and (max-width: 840px){
        height: 80%;
    }

    @media screen and (max-width: 320px){
        height: 70%;
    }
`

export const Photo = styled.img`
    height: 100%;
    width: auto;
`