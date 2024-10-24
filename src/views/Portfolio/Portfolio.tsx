import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks'
import { Card } from '@/components'
import { Container, ProjectsContainer, Title, TitleContainer } from './styles'

export function Portfolio() {

    const { t } = useTranslation()
    const projects = useProjects()

    return (
        <Container>
            <TitleContainer>
                <Title>{t('myProjectsTitle')}</Title>
            </TitleContainer>
            <ProjectsContainer>
                {
                    projects.map((item, key) => (
                        <Card
                            imageSource={item.imageSource}
                            subtitle={item.subtitle}
                            title={item.title}
                            urlApplication={item.urlApplication}
                            urlCode={item.urlCode}
                            key={key}
                        />
                    ))
                }
            </ProjectsContainer>
        </Container>
    )
}