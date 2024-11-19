import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks'
import { Card, ActionButton, SectionDivider, TitleWithSubtitle } from '@/components'
import {
  backendImg,
  frontendImg,
  mobileImg,
  meImg,
  diagonalArrowImg,
  classesImg,
} from '@/assets'

import { Banner } from './Banner'
import {
  Container,
  MyProjectsContainer,
  Services,
  ProjectsContainer,
  ButtonContainer,
  MyServicesContainer,
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
        urlImage={meImg}
      />
      <SectionDivider destinyId='services' />
      <MyServicesContainer id='services'>
        <TitleWithSubtitle
          title={t('services')}
          subtitle={t('discoverServices')}
        />
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

          <ServiceRect
            imageSrc={classesImg}
            title={t('privateClasses')}
            subtitle={t('privateClassesSubtitle')}
          />
        </Services>
      </MyServicesContainer>
      <SectionDivider destinyId='projects' />
      <MyProjectsContainer id='projects'>
        <TitleWithSubtitle
          title={t('myProjectsTitle')}
          subtitle={t('discoverProjects')}
        />
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

        <ButtonContainer>
          <ActionButton
            imageSource={diagonalArrowImg}
            label={t('seeMore')}
            onClick={handleRedirect}
          />
        </ButtonContainer>
      </MyProjectsContainer>
    </Container>
  )
} 