import { Container, ContainerIcon, Icon, Label } from './styles'

interface TecnologyRectProps{
    imageSrc: string
    label: string
}

export function TecnologyRect({ imageSrc, label }: TecnologyRectProps){
    return (
        <Container>
            <ContainerIcon>
                <Icon src={imageSrc}/>
            </ContainerIcon>
            <Label>{label}</Label>
        </Container>
    )
}