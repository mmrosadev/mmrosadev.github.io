import { useTranslation } from 'react-i18next'
import {
  FooterContainer,
  FooterLinksContainer,
  CopyrightContainer,
  CopyrightLabel,
  ListItem,
  UnorderedList,
  SocialMediaContainer,
  WrapperIconLabel,
  WrapperIcon,
  WrapperLabel,
} from './styles'
import { NavBarLink, SocialMediaButton } from '@/components'
import { githubImg, letterImg, linkedinImg, phoneImg } from '@/assets'

export function Footer() {

  const { t } = useTranslation()

  return (
    <FooterContainer>
      <FooterLinksContainer>
        <UnorderedList>
          <ListItem><NavBarLink to='/' >{t('home')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/portfolio'>{t('portfolio')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/resume' >{t('resume')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/classes' >{t('classes')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/budgets'>{t('budgets')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/contact'>{t('contact')}</NavBarLink></ListItem>
        </UnorderedList>
        {/* <UnorderedList>
          <SocialMediaContainer>
            <SocialMediaButton
              $imageSource={githubImg}
              href='https://github.com/mmrosatab'
              target='_blank'
              size='small'
            />
            <SocialMediaButton
              $imageSource={linkedinImg}
              href='https://www.linkedin.com/in/mmrosatab/'
              target='_blank'
              size='small'
            />
          </SocialMediaContainer>
        </UnorderedList>
        <UnorderedList>
          <WrapperIconLabel>
            <WrapperIcon src={phoneImg} />
            <WrapperLabel>+55 21 97560-6376</WrapperLabel>
          </WrapperIconLabel>
          <WrapperIconLabel>
            <WrapperIcon src={letterImg} />
            <WrapperLabel> mmrosatab@gmail.com</WrapperLabel>
          </WrapperIconLabel>
        </UnorderedList> */}
      </FooterLinksContainer>
      <CopyrightContainer>
        <CopyrightLabel>
          Copyright © 2024 Mayara Marques
        </CopyrightLabel>
      </CopyrightContainer>
    </FooterContainer>
  )
} 