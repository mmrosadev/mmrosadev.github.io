import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @keyframes shake {
        0%, 100% {
            transform: translateX(0); /* Posição inicial e final sem deslocamento */
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px); /* Deslocamento para a esquerda */
        }
        20%, 40%, 60%, 80% {
            transform: translateX(5px); /* Deslocamento para a direita */
        }
    }

    div:hover{
        animation: shake 0.5s;
    }
    
`

export const ContainerIcon = styled.div`
    background-color: #301C41;
    width: 40px;
    height: 40px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
`

export const Icon = styled.img`
    width: 28px;
    height: 28px;
`

export const Label = styled.span`
    font-size: 10px;
`