import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 7px;
    padding: 20px;
    box-shadow: 0px 4px 8px #7159C1;

    width: 280px;
    min-height: 300px;
`

export const IconWrapper = styled.div`
    width: 48px;
    height: 48px;
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