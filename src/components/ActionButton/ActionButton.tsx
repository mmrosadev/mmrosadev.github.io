import { Button, Anchor, Icon, Label } from './styles'

interface ActionButtonProps {
    label: string
    imageSource: string
    link?: string
    width?: number
    height?: number
    onClick?: () => void
}

export function ActionButton({
    label,
    link,
    imageSource,
    width,
    height,
    onClick,
}: ActionButtonProps) {
    return (
        onClick ? (
            <Button onClick={onClick}>
                <Icon
                    width={width}
                    height={height}
                    src={imageSource}
                />
                <Label>{label}</Label>
            </Button >
        ) : (
            <Anchor
                href={link}
                target='_blank'
            >
                <Icon
                    width={width}
                    height={height}
                    src={imageSource}
                />
                <Label>{label}</Label>
            </Anchor>
        )
    )
}