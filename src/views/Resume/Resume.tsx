import { useTranslation } from 'react-i18next'
import {
    Container,
    Header,
    Icon,
    DownloadIconWrapper,
    ResumeContainer,
    Title,
    ResumeHeader,
    TitleHeader,
    SubtitleHeader,
    Section,
    ContentSection,
    TitleSection,
    UL,
    LI
} from './styles'
import { downloadImg } from '@/assets'

export function Resume() {

    const { t } = useTranslation()

    return (
        <Container>
            <Header>
                <Title>{t('resume')}</Title>
                <DownloadIconWrapper onClick={() => console.log('implementar')}>
                    <Icon src={downloadImg} alt='download' />
                </DownloadIconWrapper>
            </Header>
            <ResumeContainer>
                <ResumeHeader>
                    <TitleHeader>Mayara Marques da Rosa</TitleHeader>
                    <SubtitleHeader>
                        <a href='https://wa.me/5521975606376' target='_blank'>+55 21 97560-6376</a>
                    </SubtitleHeader>
                    <SubtitleHeader>
                        <a href='mailto: mmrosatab@gmail.com' target='_blank'>mmrosatab@hotmail.com</a>
                    </SubtitleHeader>
                    <SubtitleHeader>
                        <a href='https://github.com/mmrosatab' target='_blank'>github.com/mmrosatab</a>
                    </SubtitleHeader>
                    <SubtitleHeader>
                        <a href='https://linkedin.com/in/mmrosatab' target='_blank'>linkedin.com/in/mmrosatab</a>
                    </SubtitleHeader>
                </ResumeHeader>

                <Section>
                    <TitleSection>{t('professionalSummary')}</TitleSection>
                    <ContentSection>{t('professionalSummaryContent')}</ContentSection>
                </Section>

                <Section>
                    <TitleSection>{t('education')}</TitleSection>
                    <ContentSection>{t('educationContent')}</ContentSection>
                </Section>
                <Section>
                    <TitleSection>{t('professionalExperience')}</TitleSection>
                    <ContentSection>
                        <UL>
                            <LI>{t('professionalExperience1Title')}</LI>
                            <UL>
                                <LI>{t('pe1Activity1')}</LI>
                                <LI>{t('pe1Activity2')}</LI>
                                <LI>{t('pe1Activity3')}</LI>
                                <LI>{t('pe1Activity4')}</LI>
                                <LI>{t('pe1Activity5')}</LI>
                                <LI>{t('pe1Activity6')}</LI>
                            </UL>
                        </UL>
                    </ContentSection>
                    <ContentSection>
                        <UL>
                            <LI>{t('professionalExperience2Title')}</LI>
                            <UL>
                                <LI>{t('pe2Activity1')}</LI>
                                <LI>{t('pe2Activity2')}</LI>
                            </UL>
                        </UL>
                    </ContentSection>

                    <ContentSection>
                        <UL>
                            <LI>{t('professionalExperience3Title')}</LI>
                            <UL>
                                <LI>{t('pe3Activity1')}</LI>
                            </UL>
                        </UL>
                    </ContentSection>

                    <ContentSection>
                        <UL>
                            <LI>{t('professionalExperience4Title')}</LI>
                            <UL>
                                <LI>{t('pe4Activity1')}</LI>
                            </UL>
                        </UL>
                    </ContentSection>
                </Section>

                <Section>
                    <TitleSection>{t('complementaryActivities')}</TitleSection>
                    <ContentSection>
                        <UL>
                            <LI>{t('ca1Title')}</LI>
                            <UL>
                                <LI>{t('ca1Activity1')}</LI>
                                <LI>{t('ca1Activity2')}</LI>
                            </UL>
                        </UL>
                    </ContentSection>

                    <ContentSection>
                        <UL>
                            <LI>{t('ca2Title')}</LI>
                            <UL>
                                <LI>{t('ca2Activity1')}</LI>
                                <LI>{t('ca2Activity2')}</LI>
                            </UL>
                        </UL>
                    </ContentSection>

                    <ContentSection>
                        <UL>
                            <LI>{t('ca3Title')}</LI>
                            <UL>
                                <LI>{t('ca3Activity1')}</LI>
                                <LI>{t('ca3Activity2')}</LI>
                                <LI>{t('ca3Activity3')}</LI>
                            </UL>
                        </UL>
                    </ContentSection>
                </Section>


                <Section>
                    <TitleSection>{t('complementaryCourses')}</TitleSection>
                    <ContentSection>
                        <UL>
                            <LI>{t('cc1Title')}</LI>
                            <LI>{t('cc2Title')}</LI>
                            <LI>{t('cc3Title')}</LI>
                            <LI>{t('cc4Title')}</LI>
                        </UL>
                    </ContentSection>
                </Section>

                <Section>
                    <TitleSection>{t('availability')}</TitleSection>
                    <ContentSection>
                        <UL>
                            <LI>{t('availabilityContent')}</LI>
                        </UL>
                    </ContentSection>
                </Section>
            </ResumeContainer>
        </Container>
    )
}
