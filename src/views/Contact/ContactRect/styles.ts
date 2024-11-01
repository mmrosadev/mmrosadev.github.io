import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const ContainerRect = styled.div`
    width: 70px;
    height: 70px;
    position: relative;
`

export const FrontRect = styled.div`
    width: 50px;
    height: 50px;
    background-color: #5C65C0;
    z-index: 1;
    border-radius: 10px;
    position: absolute;
    bottom: 0px;
    right: 14px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
    padding: 7px;
`

export const BackRect = styled.div`
    width: 50px;
    height: 50px;
    background-color: #413B6B;
    z-index: 0;
    border-radius: 10px;
    position: absolute;
    bottom: 10px;
    right: 5px;
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`

export const Title = styled.span`
    font-size: 16px;
    margin: 8px 0px 5px 0px ;
    color: #301C41;
`

export const Subtitle = styled.span`
    font-size: 12px;
    margin: 5px 0px;
    color: #301C41;
    font-family:  'Roboto';
    width: 200px;
`