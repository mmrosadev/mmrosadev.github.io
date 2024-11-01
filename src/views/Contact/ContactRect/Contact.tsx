import { BackRect, Container, ContainerRect, FrontRect, Icon, Subtitle, Title } from './styles'

interface ContactRectProps {
    title: string
    subtitle: string
    imageSrc: string
}

export function ContactRect({ title, subtitle, imageSrc }: ContactRectProps) {
    return (
        <Container>
            <ContainerRect>
                <FrontRect>
                    <Icon src={imageSrc} />
                </FrontRect>
                <BackRect></BackRect>
            </ContainerRect>

            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>

    )
}