import { useTranslation } from 'react-i18next'
import {
    Container,
    ContentContainer,
    Photo,
    PhotoContainer,
    SubTitle,
    TextContainer,
    Title,
    TitleContainer
} from './styles'

interface BannerProps {
    urlImage: string
}

export function Banner({ urlImage }: BannerProps) {
    const { t } = useTranslation()

    return (
        <Container>
            <ContentContainer>
                <PhotoContainer>
                    <Photo src={urlImage} alt="Foto de apresentação" />
                </PhotoContainer>
                <TextContainer>
                    <TitleContainer>
                        <Title>{t('introduce1')}</Title>
                    </TitleContainer>
                    <SubTitle>{t('introduce2')}</SubTitle>
                    <SubTitle>{t('introduce3')}</SubTitle>
                </TextContainer>
            </ContentContainer>
        </Container>
    )
}
