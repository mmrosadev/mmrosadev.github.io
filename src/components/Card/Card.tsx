import { useTranslation } from 'react-i18next'
import { githubImg, pageImg } from '@/assets'
import { ActionButton } from '@/components'
import {
    ActionsContainer,
    Container,
    Content,
    MediaContainer,
    Subtitle,
    Title
} from './styles'

export interface CardProps {
    id?: number
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
                sx={{
                    height: 190,
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                image={imageSource}
                title={`${title}_image`}
            />
            <Content
                sx={{ backgroundColor: '#1E1D26', paddingLeft: 0, paddingRight: 0 }}
            >
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
            </Content>
            <ActionsContainer>
                <ActionButton
                    imageSource={githubImg}
                    label={t('viewCode')}
                    link={urlCode}
                />

                <ActionButton
                    imageSource={pageImg}
                    label={t('viewApplication')}
                    link={urlApplication}
                />
            </ActionsContainer>
        </Container>
    )
}
