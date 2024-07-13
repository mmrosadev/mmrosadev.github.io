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

export function Home(){
    return (
      <>
        <Banner
          urlImage={customPhoto}
        />
        <Main>
          <SectionContainer>
            <Section 
                title="Sobre mim"
                content={
                  [
                  'Natural do Rio de Janeiro, atualmente moro em Nova Iguaçu.',
                  'Desenvolvo aplicações web, mobile e desktop.',
                  'Bacharela em ciência da computação pela UFRRJ.',
                  'Gosto de prototipar interfaces e deixá-las com alto nível de fidelidade.']
                }
              />
            <Section 
              title="Tecnologias"
              content={
                ['Tecnologias que trabalho recentemente:']
              }
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

          <SectionContainer>
            <Section 
              title="Ocupações atuais"
              content={
              [
                'Engenheira de software plena na Getrak.',
                'Instrutora de programação.',
              ]
              }
            />
            <Section 
              title="Tecnologias"
              content={
                ['Tecnologias que trabalho recentemente:']
              }
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