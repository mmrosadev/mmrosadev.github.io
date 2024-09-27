import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #301C41;
    margin: 20px 0px;
    height: 240px;
    border: 1px solid #301C41;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
    

    @media screen and (min-width: 200px) and (max-width: 700px) {
        width: 100%;
    }
`

export const TitleContainer = styled.div`
    margin-bottom: 20px;
`

export const Title = styled.span`
    font-size: 24px;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextContainter = styled.div`
    margin-bottom: 10px;
`

export const Text = styled.span`
    font-size: 14px;
`

export const ComponentContainer = styled.div`
    display: flex;
`