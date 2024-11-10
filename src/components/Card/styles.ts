import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export const Container = styled(Card)`
    width: 280px;
    padding: 8px;
    background-color: #1E1D26 !important;
    border-radius: 7px;

    border: 1px solid #7159C1;

    &:hover{
        border: 1px solid transparent;
        border-image: linear-gradient(to bottom, #1BCF6C , #7159C1);
        border-image-slice: 1;
    }
    
`

export const MediaContainer = styled(CardMedia)`
    height: 190px;
    border-radius: 7px;
`

export const ActionsContainer = styled(CardActions)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1E1D26;
    height: 100px !important;
    padding: 8px 0px 0px 0px !important;
`

export const Content = styled(CardContent)`
    background-color: #1E1D26;
    padding-left: 0;
    padding-right: 0;
`


export const Title = styled.div`
    font-size: 20px;
    margin: 14px 0px;
    color: #fff;
`

export const Subtitle = styled.div`
    font-size: 12px;
    margin-bottom: 4px;
    color: #fff;
    height: 32px;
`

