import { Anchor } from './styles'

interface SocialMediaButtonProps{
    $imageSource: string
    size?: 'small' | 'big' 
    href: string
    target: string
}

export function SocialMediaButton({
    size='big',
    $imageSource,
    href,
    target
}: SocialMediaButtonProps){
    return (
        <Anchor
            size={size}
            $imageSource={$imageSource}
            href={href}
            target={target}
        />
    )
}