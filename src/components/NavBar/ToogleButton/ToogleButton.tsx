import { Button } from './styles'

interface ToogleButtonProps {
    open: boolean
    onClick: () => void
}

export function ToogleButton({ open = false, onClick }: ToogleButtonProps) {
    return (
        <Button
            type="button"
            open={open}
            onClick={onClick}
        >
            <div></div>
            <div></div>
            <div></div>
        </Button>
    )
}