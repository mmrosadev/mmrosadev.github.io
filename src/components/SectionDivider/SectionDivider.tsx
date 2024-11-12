import { useEffect } from 'react'
import { Container, Jumper } from './styles'

interface SectionDividerProps {
    destinyId: string
}

export function SectionDivider({ destinyId }: SectionDividerProps) {

    // const handleClick = () => {
    //     const element = document.getElementById(destinyId || '')
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    //     }
    // }

    return (
        <Container>
            {/* <Jumper type="button" onClick={handleClick} /> */}
        </Container>
    )
}