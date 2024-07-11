import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"
import customPhoto from '../../assets/profile.png'
import { Main } from "./styles"

export function Home(){
    return (
      <>
        <Banner
          urlImage={customPhoto}
        />
        <Main>
          <Section 
            title="Sobre mim"
            content={
              [
              'Natural do Rio de Janeiro, atualmente moro em Nova Iguaçu.',
              'Desenvolvo aplicações web, mobile e desktop.',
              'Bacharela em ciência da computação pela UFRRJ',
              'Gosto de prototipar interfaces e deixá-las com alto nível de fidelidade']
            }
          />
           <Section 
            title="Ocupações atuais"
            content={
             [
              'Engenheira de software plena na Getrak',
              'Instrutora de programação.',
             ]
            }
          />
        </Main>
      </>

    )
} 