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
    id?: string
}

export function Banner({ urlImage, id }: BannerProps) {
    const { t } = useTranslation()

    return (
        <Container id={id}>
            <ContentContainer>
                <PhotoContainer>
                    <Photo src={urlImage} />
                </PhotoContainer>
                <TextContainer>
                    <>
                        <TitleContainer>
                            <Title>{t('introduce1')}</Title>
                        </TitleContainer>
                        <>
                            <SubTitle>{t('introduce2')}</SubTitle>
                        </>
                        <>
                            <SubTitle>{t('introduce3')}</SubTitle>
                        </>
                    </>
                </TextContainer>
            </ContentContainer>
        </Container>
    )
}