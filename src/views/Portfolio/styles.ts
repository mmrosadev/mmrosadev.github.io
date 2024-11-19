import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 64px 0px;

    @media screen and (max-width: 700px){
        padding: 32px 0px;
    }
`

export const ProjectsContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 32px; 

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 601px) and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 701px) {
        margin-bottom: 64px; 
    }
    
`