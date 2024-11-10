import { useTranslation } from 'react-i18next'
import {
    jsImg,
    tsImg,
    pythonImg,
    reactImg,
    reactNativeImg,
    javaImg,
    cssImg,
    htmlImg,
    nodeImg,
    cImg,
    photoImg
} from '@/assets'
import { Section } from './Section'
import { TecnologyRect } from './TecnologyRect'
import {
    Main,
    SectionContainer,
    TecnologyRectContainer,
    Container,
    Photo,
    TitleContainer,
    Title,
} from './styles'

export function AboutMe() {

    const { t } = useTranslation()

    return (
        <Container>
            {/* <Main>
                <Photo src={photoImg} />
                <TitleContainer>
                    <Title>{t('moreAboutMe')}</Title>
                </TitleContainer>
                <SectionContainer>
                    <Section
                        title={t('whoAmI')}
                        content={
                            [
                                t('from'),
                                t('live'),
                                t('hobbies')
                            ]
                        }
                    />

                    <Section
                        title={t('currentOccupations')}
                        content={
                            [
                                t('position1'),
                                t('position2')
                            ]
                        }
                    />

                    <Section
                        title={t('educationAndInterests')}
                        content={
                            [
                                t('formation'),
                                t('interests'),
                            ]
                        }
                    />

                    <Section
                        title={t('technologies')}
                        component={
                            <TecnologyRectContainer>
                                <TecnologyRect imageSrc={jsImg} label="JavaScript" />
                                <TecnologyRect imageSrc={tsImg} label="TypeScript" />
                                <TecnologyRect imageSrc={reactImg} label="React" />
                                <TecnologyRect imageSrc={reactNativeImg} label="React Native" />
                                <TecnologyRect imageSrc={nodeImg} label="NodeJS" />
                                <TecnologyRect imageSrc={pythonImg} label="Python" />
                                <TecnologyRect imageSrc={cImg} label="C" />
                                <TecnologyRect imageSrc={javaImg} label="Java" />
                                <TecnologyRect imageSrc={cssImg} label="CSS" />
                                <TecnologyRect imageSrc={htmlImg} label="HTML" />
                            </TecnologyRectContainer>
                        }
                    />
                </SectionContainer>
            </Main> */}
        </Container>
    )
} 