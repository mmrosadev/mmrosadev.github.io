import { notFoundImg } from '@/assets'
import { Container, Icon, Title, TitleContainer } from './styles'

export function NoMatch(): JSX.Element {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    Ops! Página não encontrada!
                </Title>
            </TitleContainer>
            <Icon src={notFoundImg} alt='Not found image' />
        </Container>
    )
}