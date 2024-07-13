import { ReactNode } from "react"
import {
    Container, 
    ContentContainer,
    Title,
    TitleContainer,
    Text,
    TextContainter,
    ComponentContainer
} from "./styles"

interface SectionProps{
    title: string
    content: string[]
    component?: ReactNode
}
export function Section({
    title,
    content,
    component
}: SectionProps){

    const ContentComponents = content.map((text,index) => (
        <TextContainter>
            <Text key={index}>
                {text}
            </Text>
        </TextContainter>
    ))
    
    return (
    <Container>
        <TitleContainer>
            <Title>{title}</Title>
        </TitleContainer>
        <ContentContainer>
            {!!ContentComponents && ContentComponents}
        </ContentContainer>

        <ComponentContainer>
            {!!component && component}
        </ComponentContainer>
    </Container>
    )
}