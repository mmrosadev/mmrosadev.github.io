import { useProjects } from '@/hooks'
import { Container, ProjectsContainer, Title, TitleContainer } from './style'
import { Card } from '@/components'

export function Portfolio() {

    const projects = useProjects()

    return (
        <Container>
            <TitleContainer>
                <Title>Meus Projetos</Title>
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