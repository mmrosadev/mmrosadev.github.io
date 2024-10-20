import { useTranslation } from 'react-i18next'
import { notFoundImg } from '@/assets'
import { Container, Icon, Title, TitleContainer } from './styles'

export function NoMatch(): JSX.Element {

    const { t } = useTranslation()
    
    return (
        <Container>
            <TitleContainer>
                <Title>
                    {t('notFound')}
                </Title>
            </TitleContainer>
            <Icon src={notFoundImg} alt='Not found image' />
        </Container>
    )
}