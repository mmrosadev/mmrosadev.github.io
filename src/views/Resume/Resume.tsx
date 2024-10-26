import { useTranslation } from 'react-i18next'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
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
import { Margins, Alignment } from 'pdfmake/interfaces'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export function Resume() {

    const { t } = useTranslation()

    const docDefinition = {
        content: [
            { text: 'Mayara Marques da Rosa', style: 'header' },
            { text: '+55 21 97560-6376', style: 'subheader' },
            { text: 'mmrosatab@hotmail.com', style: 'subheader' },
            { text: 'github.com/mmrosatab', style: 'subheader' },
            { text: 'linkedin.com/in/mmrosatab', style: 'lastSubheader' },
            { text: t('professionalSummary'), style: 'section' },
            { text: t('professionalSummaryContent'), style: 'contentSection' },
            { text: t('education'), style: 'section' },
            { text: t('educationContent'), style: 'contentSection' },
            { text: t('professionalExperience'), style: 'section' },
            {
                ul: [
                    {
                        text: t('professionalExperience1Title'),
                        style: 'ulTitle',
                    },
                    {
                        ul: [
                            { text: t('pe1Activity1'), style: 'ul' },
                            { text: t('pe1Activity2'), style: 'ul' },
                            { text: t('pe1Activity3'), style: 'ul' },
                            { text: t('pe1Activity4'), style: 'ul' },
                            { text: t('pe1Activity5'), style: 'ul' },
                            { text: t('pe1Activity6'), style: 'ul' },
                        ]
                    }
                ]
            },
            {
                ul: [
                    {
                        text: t('professionalExperience2Title'),
                        style: 'ulTitle',
                    },
                    {
                        ul: [
                            { text: t('pe2Activity1'), style: 'ul' },
                            { text: t('pe2Activity2'), style: 'ul' },
                        ]
                    }
                ]
            },
            {
                ul: [
                    {
                        text: t('professionalExperience3Title'),
                        style: 'ulTitle',
                    },
                    {
                        ul: [
                            { text: t('pe3Activity1'), style: 'ul' },
                        ]
                    }
                ]
            },
            {
                ul: [
                    {
                        text: t('professionalExperience4Title'),
                        style: 'ulTitle',
                    },
                    {
                        ul: [
                            { text: t('pe4Activity1'), style: 'ul' },
                            { text: t('pe4Activity2'), style: 'ul' },
                            { text: t('pe4Activity3'), style: 'lastUl' },
                        ]
                    }
                ]
            },
            { text: t('complementaryActivities'), style: 'section' },
            {
                ul: [
                    {
                        text: t('ca1Title'),
                        style: 'ulTitle',
                    },
                    {
                        ul: [
                            { text: t('ca1Activity1'), style: 'ul' },
                            { text: t('ca1Activity2'), style: 'ul' },
                        ]
                    }
                ]
            },
            {
                ul: [
                    {
                        text: t('ca2Title'),
                        style: 'ulTitle',
                    },
                    {
                        ul: [
                            { text: t('ca2Activity1'), style: 'ul' },
                            { text: t('ca2Activity2'), style: 'ul' },
                            { text: t('ca2Activity3'), style: 'ul' },
                        ]
                    }
                ]
            },
            {
                ul: [
                    {
                        text: t('ca3Title'),
                        style: 'ulTitle',
                    },
                    {
                        ul: [
                            { text: t('ca3Activity1'), style: 'ul' },
                            { text: t('ca3Activity2'), style: 'ul' },
                            { text: t('ca3Activity3'), style: 'lastUl' },
                        ]
                    }
                ]
            },
            { text: t('complementaryCourses'), style: 'section' },
            {

                ul: [
                    { text: t('cc1Title'), style: 'ulTitle' },
                    { text: t('cc2Title'), style: 'ul' },
                    { text: t('cc3Title'), style: 'ul' },
                    { text: t('cc4Title'), style: 'lastUl' },
                ]
            },
            { text: t('availability'), style: 'section' },
            {
                ul: [
                    { text: t('availabilityContent'), style: 'ulTitle' },
                ]
            },
        ],

        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'center' as Alignment,
                margin: [0, 2, 0, 2] as Margins,
            },
            subheader: {
                fontSize: 11,
                alignment: 'center' as Alignment,
            },
            lastSubheader: {
                fontSize: 11,
                alignment: 'center' as Alignment,
                margin: [0, 0, 0, 30] as Margins,
            },
            section: {
                fontSize: 12,
                bold: true,
                alignment: 'left' as Alignment,
                margin: [0, 0, 0, 0] as Margins,
            },
            contentSection: {
                fontSize: 11,
                alignment: 'justify' as Alignment,
                margin: [0, 10, 0, 20] as Margins,
            },
            ul: { fontSize: 11 },
            lastUl: { fontSize: 11, margin: [0, 0, 0, 10] as Margins },
            ulTitle: { fontSize: 11, margin: [0, 10, 0, 0] as Margins }
        },
    }


    const createPdf = () => {
        pdfMake.createPdf(docDefinition).download('mmrosa.pdf', () => console.log('asdasdas'))
    }

    return (
        <Container>
            <Header>
                <Title>{t('resume')}</Title>
                <DownloadIconWrapper onClick={createPdf}>
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
