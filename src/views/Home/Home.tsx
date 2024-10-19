import { useTranslation } from 'react-i18next'
import { TecnologyRect, Section } from '@/components'

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
  chartplotImg,
  nozbooksImg,
  postsUpvotesImg,
  viacepImg,
} from '@/assets'
import { Banner } from './Banner'
import {
  Main,
  SectionContainer,
  TecnologyRectContainer,
  Container,
  MyProjectsContainer,
  Title,
  TitleContainer,
} from './styles'
import { Swiper } from './Swiper'

export function Home() {

  const { t } = useTranslation()

    const slides = [
      {
        imageSource: raquelMarriegeImg,
        title: t('titleCardMarriage'),
        subtitle: t('subtitleCardMarriage'),
        urlCode: 'https://github.com/mmrosatab/Raquels-Marriage',
        urlApplication: 'https://raquels-marriage.vercel.app/',
      },
      {
        imageSource: nozbooksImg,
        title: 'NozBooks',
        subtitle: t('appnozbookDescription'),
        urlCode: 'https://github.com/mmrosatab/nozbooks-app',
        urlApplication: 'https://nozbooks-app.vercel.app/',
      },
      {
        imageSource: chartplotImg,
        title: 'Chartplot challenge',
        subtitle: t('appChartPlotDescription'),
        urlCode: 'https://github.com/mmrosatab/challenge-chart-plot',
        urlApplication: 'https://challenge-chart-plot.vercel.app/',
      },
      {
        imageSource: postsUpvotesImg,
        title: 'Post and upvotes challenge',
        subtitle: t('appPostsUpvotes'),
        urlCode: 'https://github.com/mmrosatab/challenge-posts-and-upvotes',
        urlApplication: 'https://challenge-posts-and-upvotes.vercel.app/',
      },
      {
        imageSource: viacepImg,
        title: 'Address search by zipcode',
        subtitle: t('appViaCep'),
        urlCode: 'https://github.com/mmrosatab/to-explore-viacep-api',
        urlApplication: 'to-explore-viacep-api.vercel.app/',
      },
      {
        imageSource: nodeImg,
        title: 'Phonebook api',
        subtitle: t('apiPhonebookBackend'),
        urlCode: 'https://github.com/mmrosatab/phonebook-backend',
        urlApplication: 'https://challenge-chart-plot.vercel.app/',
      },
    ]

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
                t('interests')
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

      <MyProjectsContainer>
        <TitleContainer>
          <Title>{t('myProjectsTitle')}</Title>
        </TitleContainer>
        <div style={{display: 'flex'}}>

          <Swiper
            slideWidth={280}
            slidesPerView={4}
            slides={slides}
          />
        </div>
      </MyProjectsContainer>
    </Container>
  )
} 