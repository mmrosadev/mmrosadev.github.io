import { useTranslation } from "react-i18next"
import { TecnologyRect } from "../../components/TecnologyRect"
import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"
import customPhoto from '../../assets/profile.png'
import js from '../../assets/js.svg'
import ts from '../../assets/ts.svg'
import python from '../../assets/python.svg'
import react from '../../assets/react.svg'
import reactNative from '../../assets/react-native.svg'
import java from '../../assets/java.svg'
import css from '../../assets/css.svg'
import html from '../../assets/html.svg'
import node from '../../assets/node.svg'
import c from '../../assets/c.svg'
import raquelMarriege from '../../assets/raquel-marriege.svg'
import {
  Main,
  SectionContainer,
  TecnologyRectContainer,
  Footer,
  FooterLinksContainer,
  CopyrightContainer,
  Container,
  CopyrightLabel,
  MyProjectsContainer,
  Title,
  SubTitle,
  TitleContainer,
  CardsContainer,
} from "./styles"
import { Card } from "../../components/Card"

export function Home(){

  const { t } = useTranslation()
  
  return (
    <Container>
      <Banner
        urlImage={customPhoto}
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
        </SectionContainer>

        <SectionContainer>
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
                <TecnologyRect imageSrc={js} label="Javascript"/>
                <TecnologyRect imageSrc={ts} label="Typescript"/>
                <TecnologyRect imageSrc={react} label="React"/>
                <TecnologyRect imageSrc={reactNative} label="React Native"/>
                <TecnologyRect imageSrc={node} label="Node"/>
                <TecnologyRect imageSrc={python} label="Python"/>
                <TecnologyRect imageSrc={c} label="C"/>
                <TecnologyRect imageSrc={java} label="Java"/>
                <TecnologyRect imageSrc={css} label="CSS"/>
                <TecnologyRect imageSrc={html} label="HTML"/>
              </TecnologyRectContainer>
            }
          />
        </SectionContainer>
      </Main>
      <MyProjectsContainer>
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
            previewSrc={raquelMarriege}
          />
        </CardsContainer>
      </MyProjectsContainer>
      <Footer>
        <FooterLinksContainer>  
        </FooterLinksContainer>
        <CopyrightContainer>
            <CopyrightLabel>
              Copyright © 2024 Mayara Marques
            </CopyrightLabel>
          </CopyrightContainer>
      </Footer>
    </Container>
  )
} 