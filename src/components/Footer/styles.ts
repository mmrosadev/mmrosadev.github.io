import styled from 'styled-components'

export const CopyrightContainer = styled.div`
    width: 100%;
    padding: 16px;
    background-color: #18171D;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;

    border-bottom: 4px solid transparent;
    border-image: linear-gradient(to right, #1BCF6C , #7159C1);
    border-image-slice: 1;
`

export const CopyrightLabel = styled.span`
    font-size: 12px;
`
