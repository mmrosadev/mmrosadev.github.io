import { Container, Icon, IconWrapper, Subtitle, Title } from './styles'

interface ServiceRectProps {
    title: string
    subtitle: string
    imageSrc: string
}

export function ServiceRect({ title, subtitle, imageSrc }: ServiceRectProps) {
    return (
        <Container>
            <IconWrapper>
                <Icon src={imageSrc} />
            </IconWrapper>

            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>

    )
}