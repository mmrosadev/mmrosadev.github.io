import { useTranslation } from 'react-i18next'
import {
  FooterContainer,
  FooterLinksContainer,
  CopyrightContainer,
  CopyrightLabel,
  ListItem,
  UnorderedList,
  SocialMediaContainer,
  WrapperContact,
} from './styles'
import { NavBarLink, CustomAnchor } from '@/components'
import { githubImg, letterImg, linkedinImg, phoneImg } from '@/assets'

export function Footer() {

  const { t } = useTranslation()

  return (
    <FooterContainer>
      <FooterLinksContainer>
        <UnorderedList>
          <ListItem><NavBarLink to='/'>{t('home')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/portfolio'>{t('portfolio')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/resume'>{t('resume')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/classes'>{t('classes')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/budgets'>{t('budgets')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/contact'>{t('contact')}</NavBarLink></ListItem>
        </UnorderedList>
        <UnorderedList>
          <SocialMediaContainer>
            <CustomAnchor
              $imageSource={githubImg}
              href='https://github.com/mmrosatab'
              target='_blank'
              size='small'
            />
            <CustomAnchor
              $imageSource={linkedinImg}
              href='https://www.linkedin.com/in/mmrosatab/'
              target='_blank'
              size='small'
            />
          </SocialMediaContainer>
        </UnorderedList>
        <UnorderedList>
          <WrapperContact>
            <CustomAnchor
              $imageSource={phoneImg}
              href='https://wa.me/5521975606376'
              target='_blank'
              size='small'
              label="+55 21 97560-6376"
            />
          </WrapperContact>
          <WrapperContact>
            <CustomAnchor
              $imageSource={letterImg}
              href='mailto: mmrosatab@gmail.com'
              target='_blank'
              size='small'
              label="mmrosatab@gmail.com"
            />
          </WrapperContact>
        </UnorderedList>
      </FooterLinksContainer>
      <CopyrightContainer>
        <CopyrightLabel>
          Copyright © 2024 Mayara Marques
        </CopyrightLabel>
      </CopyrightContainer>
    </FooterContainer>
  )
} 