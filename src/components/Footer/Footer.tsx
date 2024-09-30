import { useTranslation } from "react-i18next"
import {
    FooterContainer,
    FooterLinksContainer,
    CopyrightContainer,
    CopyrightLabel,
} from "./styles"


export function Footer(){

  const { t } = useTranslation()
  
  return (
    <FooterContainer>
      <FooterLinksContainer>  
      </FooterLinksContainer>
      <CopyrightContainer>
          <CopyrightLabel>
            Copyright © 2024 Mayara Marques
          </CopyrightLabel>
        </CopyrightContainer>
    </FooterContainer>
  )
} 