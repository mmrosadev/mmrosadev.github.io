import { useTranslation } from 'react-i18next'
import { TecnologyRect, Section, Card } from '@/components'
import {
  profileImg,
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
  raquelMarriegeImg,
} from '@/assets'
import { Banner } from './Banner'
import {
  Main,
  SectionContainer,
  TecnologyRectContainer,
  Container,
  MyProjectsContainer,
  Title,
  SubTitle,
  TitleContainer,
  CardsContainer,
} from './styles'

export function Home() {

  const { t } = useTranslation()

  return (
    <Container>
      <Banner
        urlImage={profileImg}
      />
      <Main>
        <SectionContainer>
          <Section
            title={t('aboutMe')}
            content={
              [
                t('workWith'),
                t('fromAndLive'),
                t('hobbies'),
              ]
            }
          />

          <Section
            title={t('currentOccupations')}
            content={
              [
                t('position1'),
                t('position2'),
              ]
            }
          />

          <Section
            title={t('educationAndInterests')}
            content={
              [
                t('formation'),
                t('interests'),
                t('iLike'),
              ]
            }
          />

          <Section
            title={t('technologies')}
            content={[t('technologies2')]}
            component={
              <TecnologyRectContainer>
                <TecnologyRect imageSrc={jsImg} label="Javascript" />
                <TecnologyRect imageSrc={tsImg} label="Typescript" />
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
      </Main>


      {/* <MyProjectsContainer>
          <TitleContainer>
            <Title>Meus Projetos</Title>
          </TitleContainer>
          <TitleContainer>
            <SubTitle>Alguns projetos que desenvolvi</SubTitle>
          </TitleContainer>
          <CardsContainer>
            <Card
              title="teste"
              subtitle="teste"
              previewSrc={raquelMarriegeImg}
            />
          </CardsContainer>
        </MyProjectsContainer> */}
    </Container>
  )
} 