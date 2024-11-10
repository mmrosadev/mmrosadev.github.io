import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks'
import { Card, ActionButton, SectionDivider } from '@/components'
import {
  backendImg,
  frontendImg,
  mobileImg,
  meImg,
  diagonalArrowImg,
} from '@/assets'

import { Banner } from './Banner'
import {
  Main,
  Container,
  MyProjectsContainer,
  Title,
  TitleContainer,
  Services,
  SubtitleContainer,
  Subtitle,
  ProjectsContainer,
  ButtonContainer,
} from './styles'
import { ServiceRect } from './ServiceRect'
import { useNavigate } from 'react-router-dom'

export function Home() {

  const { t } = useTranslation()
  const navigate = useNavigate()
  const projects = useProjects()

  const handleRedirect = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/portfolio')
  }

  return (
    <Container>
      <Banner
        id='banner'
        urlImage={meImg}
      />
      <SectionDivider destinyId='projects' />
      <Main>
        {/* <TitleContainer>
          <Title>{t('services')}</Title>
        </TitleContainer>
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

        </Services> */}
      </Main>
      <MyProjectsContainer id='projects'>
        <TitleContainer>
          <Title>{t('myProjectsTitle')}</Title>
        </TitleContainer>
        <SubtitleContainer>
          <Subtitle>Conheça alguns dos projetos que desenvolvi</Subtitle>
        </SubtitleContainer>
        <ProjectsContainer>
          {
            projects.slice(0, 4).map((item) => (
              <Card
                imageSource={item.imageSource}
                subtitle={item.subtitle}
                title={item.title}
                urlApplication={item.urlApplication}
                urlCode={item.urlCode}
                key={item.id}
              />
            ))
          }
        </ProjectsContainer>
      </MyProjectsContainer>
      <ButtonContainer>
        <ActionButton
          imageSource={diagonalArrowImg}
          label={t('viewCode')}
          height={22}
          width={22}
          onClick={handleRedirect}
        />
      </ButtonContainer>
    </Container>
  )
} 