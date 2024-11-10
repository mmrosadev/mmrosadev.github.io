import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, #18171D, #737373, #18171D);
`

export const Jumper = styled.button`
    position: relative;
    width: 34px;
    height: 34px;
    background: #7159C1;
    border-radius: 50%;
    cursor: pointer;
    color: #fff;

    &:hover{
        width: 38px;
        height: 38px;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
    }

    &::before {
        border-top: 5px solid white; /* Primeira seta */
        top: 50%; /* Posição da primeira seta */
        left: 50%;
        transform: translateX(-50%) translateY(-7px);
    }

    &::after {
        border-top: 5px solid white; /* Segunda seta */
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(7px);
    }

    @keyframes evanish{
        0%, 100% {
            opacity: 1;
        }
        10%, 30%, 50%, 70%, 90% {
            opacity: 0.5; 
        }
        20%, 40%, 60%, 80% {
            opacity: 1; 
        }
    }


    &::before{
        animation: evanish 5s linear infinite;
    }

    &::after{
        animation: evanish 6s linear infinite;
    }
`