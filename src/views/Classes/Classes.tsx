import { useTranslation } from 'react-i18next'
import { blackboardImg, cellphoneImg, greenStudentImg, materialImg, thinkingImg, toolsImg } from '@/assets'
import {
    Container,
    TextContainer,
    Text,
    WrapperCardIcon,
    ButtonContainer,
    Main,
    TitleContainer,
    TitleIcon,
    Title,
    AdvantagesCard,
    AdvantagesCardsContainer,
    CardIcon,
    CardLabel,
} from './styles'
import { ActionButton } from '@/components'

export function Classes() {

    const { t } = useTranslation()

    return (
        <Container>
            <Main>
                <TitleContainer>
                    <TitleIcon src={greenStudentImg} alt='student' />
                    <Title>{t('learningProgramtion')}</Title>
                </TitleContainer>
                <TextContainer>
                    <Text>{t('classesContent1')}</Text>
                    <Text>{t('classesContent2')}</Text>
                    <Text>{t('classesContent3')}</Text>
                    <Text>{t('classesContent4')}</Text>
                </TextContainer>
                <AdvantagesCardsContainer>
                    <AdvantagesCard>
                        <WrapperCardIcon>
                            <CardIcon src={blackboardImg}></CardIcon>
                        </WrapperCardIcon>
                        <CardLabel>
                            {t('classesAdvantages1')}
                        </CardLabel>
                    </AdvantagesCard>

                    <AdvantagesCard>
                        <WrapperCardIcon>
                            <CardIcon src={materialImg}></CardIcon>
                        </WrapperCardIcon>
                        <CardLabel>
                            {t('classesAdvantages2')}
                        </CardLabel>
                    </AdvantagesCard>

                    <AdvantagesCard>
                        <WrapperCardIcon>
                            <CardIcon src={thinkingImg}></CardIcon>
                        </WrapperCardIcon>
                        <CardLabel>
                            {t('classesAdvantages3')}
                        </CardLabel>
                    </AdvantagesCard>

                    <AdvantagesCard>
                        <WrapperCardIcon>
                            <CardIcon src={toolsImg}></CardIcon>
                        </WrapperCardIcon>
                        <CardLabel>
                            {t('classesAdvantages4')}
                        </CardLabel>
                    </AdvantagesCard>
                </AdvantagesCardsContainer>

                <TextContainer>
                    <Text>{t('knowMoreAboutClasses')}</Text>
                </TextContainer>

                <ButtonContainer>
                    <ActionButton
                        link='https://wa.me/5521975606376'
                        imageSource={cellphoneImg}
                        label='55+ 21 975606376'
                    />
                </ButtonContainer>
            </Main>
        </Container>
    )
}