import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 320px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 20px;

    /* background: linear-gradient(90deg, rgba(65,59,107,1) 0%, rgba(92,101,192,1) 23%, rgba(111,149,255,1) 100%); */

    /* background: rgb(26, 188, 156);
    background: -moz-linear-gradient(-45deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%);
    background: -webkit-linear-gradient(-45deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%);
    background: linear-gradient(135deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%); */


    background: rgba(65,59,107,1);
    background: -moz-linear-gradient(-45deg, rgba(65,59,107,1) 0%, rgba(111,149,255,1) 100%);
    background: -webkit-linear-gradient(-45deg, rgba(65,59,107,1) 0%, rgba(111,149,255,1) 100%);
    background: linear-gradient(135deg, rgba(65,59,107,1) 0%, rgba(111,149,255,1) 100%);


    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const TextContainer = styled.div`
    width: 50%;
    height: 100%; 
    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 60px;

    @media screen and (max-width: 700px) {
        height: 20%;
        width: auto;
        font-size: 20px;
    }
`

export const PhotoContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width: 700px) {
        
        height: 50%;
        width: auto;
    }
`

export const Photo = styled.img`
    height: 100%;
    width: auto;

    @media screen and (max-width: 700px) {
        height: 100%;
        width: auto;
    }
`