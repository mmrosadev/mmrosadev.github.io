import {
    Container,
    Title,
    TitleContainer,
    SubtitleContainer,
    Subtitle,
} from './styles'

interface TitleWithSubtitleProps {
    title: string
    subtitle: string
}

export function TitleWithSubtitle({ title, subtitle }: TitleWithSubtitleProps) {
    return (
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <SubtitleContainer>
                <Subtitle>{subtitle}</Subtitle>
            </SubtitleContainer>
        </Container>
    )
}