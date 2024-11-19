import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks'
import { Card, TitleWithSubtitle } from '@/components'
import {
    Container,
    ProjectsContainer
} from './styles'

export function Portfolio() {

    const { t } = useTranslation()
    const projects = useProjects()

    return (
        <Container>
            <TitleWithSubtitle
                title={t('myProjectsTitle')}
                subtitle={t('discoverProjects')}
            />
            <ProjectsContainer>
                {
                    projects.map((item) => (
                        <Card
                            imageSource={item.imageSource}
                            subtitle={item.subtitle}
                            title={item.title}
                            urlApplication={item.urlApplication}
                            urlCode={item.urlCode}
                            key={item.id}
                        />
                    ))
                }
            </ProjectsContainer>
        </Container>
    )
}