import { useTranslation } from 'react-i18next'
import { cellphoneImg, rocketImg } from '@/assets'
import {
    Container,
    TextContainer,
    Text,
    IconWrapper,
    Label,
    Icon,
    Item,
    ButtonContainer,
    Button,
    ButtonIconWrapper,
    ButtonIcon,
} from './styles'

export function Classes() {

    const { t } = useTranslation()

    return (
        <Container>
            <TextContainer>
                <Text>{t('classesText1')}</Text>
                <Text>{t('classesText2')}</Text>
                <Text>{t('classesText3')}</Text>
            </TextContainer>
            <TextContainer>
                <Item>
                    <IconWrapper>
                        <Icon src={rocketImg}></Icon>
                    </IconWrapper>
                    <Label>
                        {t('classesAspect1')}
                    </Label>
                </Item>

                <Item>
                    <IconWrapper>
                        <Icon src={rocketImg}></Icon>
                    </IconWrapper>
                    <Label>
                        {t('classesAspect2')}
                    </Label>
                </Item>

                <Item>
                    <IconWrapper>
                        <Icon src={rocketImg}></Icon>
                    </IconWrapper>
                    <Label>
                        {t('classesAspect3')}
                    </Label>
                </Item>

                <Item>
                    <IconWrapper>
                        <Icon src={rocketImg}></Icon>
                    </IconWrapper>
                    <Label>
                        {t('classesAspect4')}
                    </Label>
                </Item>
            </TextContainer>

            <ButtonContainer>
                <Button
                    href='https://wa.me/5521975606376'
                    target='_blank'
                >
                    <ButtonIconWrapper>
                        <ButtonIcon src={cellphoneImg} />
                    </ButtonIconWrapper>
                    <Label>55+ 21 975606376</Label>
                </Button>
            </ButtonContainer>
        </Container>
    )
}