import styled from "styled-components"

export const FooterContainer = styled.footer`
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 0;
`

export const FooterLinksContainer = styled.div`
    width: 100%;
    height: 86%;
    background-color: #1C0B2B;
`

export const CopyrightContainer = styled.div`
    width: 100%;
    height: 14%;
    background-color: #301C41;
    color: #fff;
    display: flex;
    align-items: center;

    @media screen and (min-width: 200px) and (max-width: 700px) {
        justify-content: center;
    }
`

export const CopyrightLabel = styled.span`
    font-size: 12px;

    @media screen and (min-width: 701px){
       margin-left: 100px;
    }

`