import { Button, Icon, Label } from './styles'

interface CardButtonProps {
    label: string
    link: string
    imageSource: string
    width?: number
    height?: number
}

export function CardButton({
    label,
    link,
    imageSource,
    width,
    height
}: CardButtonProps) {
    return (
        <Button
            href={link}
            target='_blank'
        >
            <Icon
                width={width}
                height={height}
                src={imageSource}
            />
            <Label>{label}</Label>
        </Button>
    )
}