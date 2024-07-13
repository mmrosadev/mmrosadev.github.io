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
import { Main, SectionContainer, TecnologyRectContainer } from "./styles"
import { TecnologyRect } from "../../components/TecnologyRect"
import { useTranslation } from "react-i18next"

export function Home(){

  const { t } = useTranslation()
  
  return (
    <>
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
              t('age', { age: 31 }),
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
    </>
  )
} 