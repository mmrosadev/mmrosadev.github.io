import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    min-height: 300px;
    position: relative;
    bottom: 0;
    background-color: #1C0B2B;
    color: #fff;

    display: flex;
    justify-content: flex-end;
    
    @media screen and (max-width: 700px) {
        min-height: 450px;
        justify-content: center;
    }
`

export const FooterLinksContainer = styled.div`
    padding-top: 30px;
    display: flex;
    width: 50%;
    height: max-content;

    @media screen and (min-width: 701px) {
        justify-content: space-evenly;
    }

    @media screen and (min-width: 200px) and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`

export const CopyrightContainer = styled.div`
    width: 100%;
    height: 14%;
    background-color: #301C41;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;

    @media screen and (min-width: 200px) and (max-width: 700px) {
        justify-content: center;
        height: 10%;
    }
`

export const CopyrightLabel = styled.span`
    font-size: 12px;

    @media screen and (min-width: 701px){
       margin-left: 100px;
    }
`

export const UnorderedList = styled.ul`
    display: flex;
    list-style-type: none;
    flex-direction: column;
    width: max-content;

    @media screen and (max-width: 700px) {
        align-items: center;
        padding: 10px;
    }
`

export const ListItem = styled.li`
    padding: 6px 6px;
    position: relative;
`

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40px;
    height: 62px;
    padding: 4px 0px;

    @media screen and (max-width: 700px) {
        flex-direction: row;
        width: 60px;
        height: 40px;
    }
`

export const WrapperContact = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 10px;
`