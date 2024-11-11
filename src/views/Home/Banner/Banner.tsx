import { useTranslation } from 'react-i18next'
import {
    Container,
    ContentContainer,
    Photo,
    PhotoContainer,
    SubTitle,
    TextWrapper,
    Title,
    Wrapper
} from './styles'

interface BannerProps {
    urlImage: string
    id?: string
}

export function Banner({ urlImage, id }: BannerProps) {
    const { t } = useTranslation()
    const introduceSubtitle = t('introduce2')

    return (
        <Container id={id}>
            <ContentContainer>
                <Wrapper>
                    <TextWrapper>
                        <Title>{t('introduce1')}</Title>
                        <SubTitle id='introduce2'>{t('introduce2')}</SubTitle>
                    </TextWrapper>
                </Wrapper>
                <PhotoContainer>
                    <Photo src={urlImage} />
                </PhotoContainer>
            </ContentContainer>
        </Container>
    )
}