import { Container, Preview, SubTitle, SubTitleContainer, Title, TitleContainer } from './styles'

interface CardProps {
    title: string
    subtitle: string
    previewSrc: string
}

export function Card({
    title,
    subtitle,
    previewSrc
}: CardProps) {
    return (
        <Container>
            <Preview src={previewSrc}></Preview>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <SubTitleContainer>
                <SubTitle>{subtitle}</SubTitle>
            </SubTitleContainer>
        </Container>
    )
}