import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks'
import {
  profileImg,
} from '@/assets'
import { Banner } from './Banner'
import {
  Main,
  Container,
  MyProjectsContainer,
  Title,
  TitleContainer,
  SwiperWrapper,
} from './styles'
import { Swiper } from './Swiper'

export function Home() {

  const { t } = useTranslation()
  const slides = useProjects()

  return (
    <Container>
      <Banner
        urlImage={profileImg}
      />
      <Main>
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