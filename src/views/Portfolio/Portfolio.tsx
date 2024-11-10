import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks'
import { Card } from '@/components'
import {
    Container,
    ProjectsContainer,
    Subtitle,
    SubtitleContainer,
    Title,
    TitleContainer
} from './styles'

export function Portfolio() {

    const { t } = useTranslation()
    const projects = useProjects()

    return (
        <Container>
            <TitleContainer>
                <Title>{t('myProjectsTitle')}</Title>
            </TitleContainer>
            <SubtitleContainer>
                <Subtitle>Conheça alguns dos projetos que desenvolvi</Subtitle>
            </SubtitleContainer>
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