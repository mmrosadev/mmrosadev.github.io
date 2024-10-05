import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export const Container = styled(Card)`
    max-width: 280px;
    border: 8px solid #413B6B;
    border-radius: 7px;
    cursor: pointer;
`

export const MediaContainer = styled(CardMedia)`
    height: 190;
`

export const ActionsContainer = styled(CardActions)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #413B6B;
    height: 100px !important;
    padding: 8px 0px 0px 0px !important;
`

export const Content = styled(CardContent)`
    background-color: #413B6B;
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
    font-family: system-ui, Arial, Helvetica, sans-serif;
    margin-bottom: 4px;
    color: #fff;
`

