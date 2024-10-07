import { useTranslation } from 'react-i18next'
import { githubImg, pageImg } from '@/assets'
import {
    ActionsContainer,
    Container,
    Content,
    MediaContainer,
    Subtitle,
    Title
} from './styles'
import { CardButton } from './CardButton'

export interface CardProps {
    title: string
    subtitle: string
    imageSource: string
    urlCode: string
    urlApplication: string
}

export function Card({
    title,
    subtitle,
    imageSource,
    urlCode,
    urlApplication,
}: CardProps) {

    const { t } = useTranslation()

    return (
        <Container>
            <MediaContainer
                sx={{ height: 190 }}
                image={imageSource}
                title={`${title}_image`}
            />
            <Content
                sx={{ backgroundColor: '#413B6B', paddingLeft: 0, paddingRight: 0 }}
            >
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
            </Content>
            <ActionsContainer>
                <CardButton
                    imageSource={githubImg}
                    label={t('viewCode')}
                    link={urlCode}
                />

                <CardButton
                    imageSource={pageImg}
                    label={t('viewApplication')}
                    link={urlApplication}
                    width={24}
                    height={24}
                />
            </ActionsContainer>
        </Container>
    )
}
