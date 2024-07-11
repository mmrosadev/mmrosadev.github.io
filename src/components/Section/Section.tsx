import { ReactNode } from "react"
import {
    Container, 
    ContentContainer,
    Title,
    TitleContainer,
    Text,
    TextContainter
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
    return (
    <Container>
        <TitleContainer>
            <Title>{title}</Title>
        </TitleContainer>
        <ContentContainer>
            {
                content.map((text,index) => <TextContainter><Text key={index}>{text}</Text></TextContainter>)
            }
        </ContentContainer>
        {
            !!component && component
        }
    </Container>
    )
}