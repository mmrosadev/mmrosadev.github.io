import { Anchor, Icon, Label } from './styles'

interface AnchorProps {
    $imageSource: string
    size?: 'small' | 'big'
    href: string
    target: string
    label?: string
}

export function CustomAnchor({
    size = 'big',
    $imageSource,
    href,
    target,
    label
}: AnchorProps) {
    return (
        <Anchor
            href={href}
            target={target}
        >
            <Icon
                size={size}
                src={$imageSource}
            />
            {label && (
                <Label>{label}</Label>
            )}
        </Anchor>
    )
}