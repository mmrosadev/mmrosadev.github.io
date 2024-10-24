import { Anchor, Label } from './styles'

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
            {children && children}

            {label && (
                <Label>{label}</Label>
            )}
        </Anchor>
    )
}