import { Anchor, Label, Wrapper } from './styles'

interface AnchorProps {
    children?: React.ReactNode
    href: string
    target: string
    label?: string
}

export function CustomAnchor({
    children,
    href,
    target,
    label
}: AnchorProps) {
    return (
        <Anchor
            href={href}
            target={target}
        >
            <Wrapper>
                {children && children}
            </Wrapper>
            {label && (
                <Label>{label}</Label>
            )}
        </Anchor>
    )
}