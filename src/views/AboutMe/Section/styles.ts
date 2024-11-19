import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1E1D26;
    padding: 16px;
    height: 240px;
    border-radius: 4px !important;

    border: 0.5px solid #7159C1;

    &:hover{
        border-color:  #1BCF6C;
    }
`

export const TitleContainer = styled.div`
    margin-bottom: 20px;
`

export const Title = styled.span`
    font-size: 18px;
    color: #7159C1;
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
    color: #fff;
`

export const ComponentContainer = styled.div`
    display: flex;
`