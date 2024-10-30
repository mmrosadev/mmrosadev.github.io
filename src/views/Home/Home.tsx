import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks'
import {
  backendImg,
  frontendImg,
  githubImg,
  mobileImg,
  multPlatformImg,
  profileImg
} from '@/assets'

import { Banner } from './Banner'
import {
  Main,
  Container,
  MyProjectsContainer,
  Title,
  TitleContainer,
  SwiperWrapper,
  Services,
} from './styles'
import { Swiper } from './Swiper'
import { ServiceRect } from './ServiceRect'

export function Home() {

  const { t } = useTranslation()
  const slides = useProjects()

  return (
    <Container>
      <Banner
        urlImage={profileImg}
      />
      <Main>
        <Services>
          <ServiceRect
            imageSrc={frontendImg}
            title={t('frontendDevelopment')}
            subtitle={t('frontendDevelopmentSubtitle')}
          />

          <ServiceRect
            imageSrc={mobileImg}
            title={t('mobileDevelopment')}
            subtitle={t('mobileDevelopmentSubtitle')}
          />

          <ServiceRect
            imageSrc={backendImg}
            title={t('backendDevelopment')}
            subtitle={t('backendDevelopmentSubtitle')}
          />

        </Services>
      </Main>
      <MyProjectsContainer>
        <TitleContainer>
          <Title>{t('myProjectsTitle')}</Title>
        </TitleContainer>
        <SwiperWrapper>
          <Swiper
            slideWidth={282}
            slides={slides}
          />
        </SwiperWrapper>
      </MyProjectsContainer>
    </Container>
  )
} 