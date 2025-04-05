import styled from 'styled-components'

interface FeedbackMessageStyleProps {
    status: 'waiting' | 'success' | 'failure'
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    padding: 64px 0px;

    @media screen and (max-width: 700px){
        padding: 32px 0px;
    }
`

export const TitleContainer = styled.div`
    margin-bottom: 32px;
    text-align: center;
`

export const Title = styled.span`
    color: #7159C1;
    font-size: 18px;
    font-weight: 500;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 70%;
`

export const Text = styled.span`
    text-align: center;
    padding: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 100;
`

export const Wrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 0px;

    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);  
    }
`

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: linear-gradient(to right, #18171D, #737373, #18171D);
    margin: 64px 0px;
`

export const Icon = styled.img`
    width: 48px;
    height: 48px;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    width: 30%;
    padding: 4px;

    @media screen and (max-width: 700px){
        width: 100%; 
    }
`

export const WrapperTextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    width: 60%;
    padding: 4px;

    @media screen and (max-width: 700px){
        width: 100%; 
    }
`

export const Label = styled.label`
    color: #fff;
    font-size: 14px;
    font-weight: 100;
    width: 100%;
    margin-bottom: 8px;
`

export const Input = styled.input`
    border-radius: 4px;
    border: 1px solid #7159C1;
    background-color: #1E1D26;
    height: 36px;
    width: 100%;
    color: #fff;
    font-size: 14px;
    margin-bottom: 8px;
    padding: 8px;
    outline: none;

    .error{
        border-color: red;
    }
`

export const TextArea = styled.textarea`
    border-radius: 4px;
    border: 1px solid #7159C1;
    background-color: #1E1D26;
    height: 100px;
    width: 100%;
    padding: 8px;
    color: #fff;
    font-size: 14px;
    outline: none;
    resize: none;

    .error{
        border-color: red;
    }
`

export const WrapperRow = styled.div`
    display: flex;
    justify-content: center; 

    @media screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 24px;
    width: 80px;
    height: 60px;
`

export const Button = styled.button`
    width: 100%;
    height: 42px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    background: linear-gradient(to right, #1BCF6C, #7159C1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
    text-decoration: none;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`

export const FeedbackMessage = styled.div<FeedbackMessageStyleProps>`
    padding: 10px;
    height: 20px;

    ${({ status }) => status === 'failure' && `
        color: red;
    `}; 

    ${({ status }) => status === 'success' && `
        color: green;
    `}; 
        
    text-align: center;
    font-size: 16px;
    font-weight: 100;
`