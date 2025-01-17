import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border: 1px solid #7159C1;
    border-radius: 7px;
    padding: 20px;


    width: 280px;
    min-height: 300px;

    &:hover{
        box-shadow: 0px 4px 8px #7159C1;
    }
`

export const IconWrapper = styled.div`
    margin-top: 8px;
    width: 48px;
    height: 48px;
    z-index: 1;
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`

export const Title = styled.span`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    margin: 40px 0px;
    color: #7159C1;
    min-height: 40px;
    width: 180px;
`

export const Subtitle = styled.span`
    text-align: center;
    font-size: 16px;
    font-weight: 100;
    color: #fff;
    height: 80px;
`