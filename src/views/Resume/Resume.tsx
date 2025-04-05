import { useTranslation } from 'react-i18next'
import pdfMake from 'pdfmake/build/pdfmake'
import { pdfFonts } from '@/assets'
pdfMake.vfs = pdfFonts

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
    LI,
    SubTitleSection
} from './styles'
import { downloadImg } from '@/assets'
import { Margins, Alignment } from 'pdfmake/interfaces'

export function Resume() {

    const { t } = useTranslation()

    const docDefinition = {
        content: [
            { text: 'Mayara Marques da Rosa', style: 'header' },
            { text: '+55 21 97560-6376', style: 'subheader', link: 'https://wa.me/5521975606376' },
            { text: 'mmrosadev@gmail.com', style: 'subheader', link: 'mailto: mmrosadev@gmail.com' },
            { text: 'github.com/mmrosadev', style: 'subheader', link: 'https://github.com/mmrosadev' },
            { text: 'linkedin.com/in/mmrosadev', style: 'lastSubheader', link: 'https://linkedin.com/in/mmrosadev' },
            { text: t('professionalSummary'), style: 'section' },
            { text: t('professionalSummaryContent'), style: 'contentSection' },
            { text: t('professionalExperience'), style: 'section' },
            {
                text: t('professionalExperience5Title'),
                style: 'ulTitle',
            },
            {
                ul: [
                    { text: t('pe5Activity1'), style: 'ul' },
                ]
            },
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
                    { text: t('pe1Activity7'), style: 'ul' },
                ]
            },
            {
                text: t('professionalExperience2Title'),
                style: 'ulTitle',
            },
            {
                ul: [
                    { text: t('pe2Activity1'), style: 'ul' },
                    { text: t('pe2Activity2'), style: 'ul' },
                    { text: t('pe2Activity3'), style: 'ul' },
                    { text: t('pe2Activity4'), style: 'ul' },
                ]
            },
            {
                text: t('professionalExperience3Title'),
                style: 'ulTitle',
            },
            {
                ul: [
                    { text: t('pe3Activity1'), style: 'ul' },
                    { text: t('pe3Activity2'), style: 'ul' },
                    { text: t('pe3Activity3'), style: 'ul' },
                ]
            },
            {
                text: t('professionalExperience4Title'),
                style: 'ulTitle',
            },
            {
                ul: [
                    { text: t('pe4Activity1'), style: 'ul' },
                    { text: t('pe4Activity2'), style: 'ul' },
                    { text: t('pe4Activity3'), style: 'ul' },
                    { text: t('pe4Activity4'), style: 'ul' },
                    { text: t('pe4Activity5'), style: 'lastUl' },
                ]
            },
            { text: t('complementaryActivities'), style: 'section' },
            {
                text: t('ca1Title'),
                style: 'ulTitle',
            },
            {
                ul: [
                    { text: t('ca1Activity1'), style: 'ul' },
                    { text: t('ca1Activity2'), style: 'lastUl' },
                ]
            },
            { text: t('education'), style: 'section' },
            { text: t('educationContent'), style: 'contentSection' },
        ],

        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'center' as Alignment,
                margin: [0, 0, 0, 2] as Margins,
            },
            subheader: {
                fontSize: 12,
                alignment: 'center' as Alignment,
                margin: [0, 2, 0, 2] as Margins,
            },
            lastSubheader: {
                fontSize: 12,
                alignment: 'center' as Alignment,
                margin: [0, 0, 0, 40] as Margins,
            },
            section: {
                fontSize: 12,
                bold: true,
                alignment: 'left' as Alignment,
                margin: [0, 10, 0, 10] as Margins,
            },
            contentSection: {
                fontSize: 12,
                alignment: 'justify' as Alignment,
                margin: [0, 10, 0, 20] as Margins,
            },
            ul: {
                fontSize: 12,
                alignment: 'justify' as Alignment,
                margin: [0, 0, 0, 10] as Margins
            },
            lastUl: {
                fontSize: 12,
                margin: [0, 0, 0, 10] as Margins,
                alignment: 'justify' as Alignment
            },
            ulTitle: { fontSize: 12, margin: [0, 10, 0, 10] as Margins }
        },
    }


    const createPdf = () => {
        pdfMake.createPdf(docDefinition).download('mmrosa.pdf')
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
                        <a href='mailto: mmrosadev@gmail.com' target='_blank'>mmrosadev@gmail.com</a>
                    </SubtitleHeader>
                    <SubtitleHeader>
                        <a href='https://github.com/mmrosadev' target='_blank'>github.com/mmrosadev</a>
                    </SubtitleHeader>
                    <SubtitleHeader>
                        <a href='https://linkedin.com/in/mmrosadev' target='_blank'>linkedin.com/in/mmrosadev</a>
                    </SubtitleHeader>
                </ResumeHeader>

                <Section>
                    <TitleSection>{t('professionalSummary')}</TitleSection>
                    <ContentSection>{t('professionalSummaryContent')}</ContentSection>
                </Section>
                <Section>
                    <TitleSection>{t('professionalExperience')}</TitleSection>
                    <ContentSection>
                        <SubTitleSection>{t('professionalExperience5Title')}</SubTitleSection>
                        <UL>
                            <LI>{t('pe5Activity1')}</LI>
                        </UL>
                    </ContentSection>
                    <ContentSection>
                        <SubTitleSection>{t('professionalExperience1Title')}</SubTitleSection>
                        <UL>
                            <LI>{t('pe1Activity1')}</LI>
                            <LI>{t('pe1Activity2')}</LI>
                            <LI>{t('pe1Activity3')}</LI>
                            <LI>{t('pe1Activity4')}</LI>
                            <LI>{t('pe1Activity5')}</LI>
                            <LI>{t('pe1Activity6')}</LI>
                            <LI>{t('pe1Activity7')}</LI>
                        </UL>
                    </ContentSection>
                    <ContentSection>
                        <SubTitleSection>{t('professionalExperience2Title')}</SubTitleSection>
                        <UL>
                            <LI>{t('pe2Activity1')}</LI>
                            <LI>{t('pe2Activity2')}</LI>
                            <LI>{t('pe2Activity3')}</LI>
                            <LI>{t('pe2Activity4')}</LI>
                        </UL>
                    </ContentSection>

                    <ContentSection>
                        <SubTitleSection>{t('professionalExperience3Title')}</SubTitleSection>
                        <UL>
                            <LI>{t('pe3Activity1')}</LI>
                            <LI>{t('pe3Activity2')}</LI>
                            <LI>{t('pe3Activity3')}</LI>
                        </UL>
                    </ContentSection>

                    <ContentSection>
                        <SubTitleSection>{t('professionalExperience4Title')}</SubTitleSection>
                        <UL>
                            <LI>{t('pe4Activity1')}</LI>
                            <LI>{t('pe4Activity2')}</LI>
                            <LI>{t('pe4Activity3')}</LI>
                            <LI>{t('pe4Activity4')}</LI>
                            <LI>{t('pe4Activity5')}</LI>
                        </UL>
                    </ContentSection>
                </Section>

                <Section>
                    <TitleSection>{t('complementaryActivities')}</TitleSection>
                    <ContentSection>
                        <SubTitleSection>{t('ca1Title')}</SubTitleSection>
                        <UL>
                            <LI>{t('ca1Activity1')}</LI>
                            <LI>{t('ca1Activity2')}</LI>
                        </UL>
                    </ContentSection>
                </Section>

                <Section>
                    <TitleSection>{t('education')}</TitleSection>
                    <ContentSection>{t('educationContent')}</ContentSection>
                </Section>
            </ResumeContainer>
        </Container>
    )
}
