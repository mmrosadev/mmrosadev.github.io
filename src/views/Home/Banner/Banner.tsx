import { useEffect } from 'react'
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
}

export function Banner({ urlImage }: BannerProps) {
    const { t } = useTranslation()


    useEffect(() => {
        const introduceSubtitle = t('introduce2')
        const subtitleDiv = document.getElementById('subtitle')

        if (subtitleDiv) {
            let currentIndex = 0
            subtitleDiv.textContent = ''

            const typingInterval = setInterval(() => {
                if (currentIndex < introduceSubtitle.length) {
                    subtitleDiv.textContent += introduceSubtitle[currentIndex]
                    currentIndex++
                } else {
                    clearInterval(typingInterval)
                }
            }, 300)

            return () => clearInterval(typingInterval)
        }
    }, [t])

    return (
        <Container>
            <ContentContainer>
                <Wrapper>
                    <TextWrapper>
                        <Title>{t('introduce1')}</Title>
                        <SubTitle id='subtitle'></SubTitle>
                    </TextWrapper>
                </Wrapper>
                <PhotoContainer>
                    <Photo src={urlImage} />
                </PhotoContainer>
            </ContentContainer>
        </Container>
    )
}