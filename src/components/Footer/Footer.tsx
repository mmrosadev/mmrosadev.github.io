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
  Icon,
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
          <ListItem><NavBarLink to='/about-me'>{t('aboutMe')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/portfolio'>{t('portfolio')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/resume'>{t('resume')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/classes'>{t('classes')}</NavBarLink></ListItem>
          <ListItem><NavBarLink to='/contact'>{t('contact')}</NavBarLink></ListItem>
        </UnorderedList>
        <UnorderedList>
          <SocialMediaContainer>
            <CustomAnchor
              href='https://github.com/mmrosatab'
              target='_blank'

            >
              <Icon src={githubImg} size='small' />
            </CustomAnchor>

            <CustomAnchor
              href='https://www.linkedin.com/in/mmrosatab/'
              target='_blank'
            >
              <Icon src={linkedinImg} size='small' />
            </CustomAnchor>
          </SocialMediaContainer>
        </UnorderedList>
        <UnorderedList>
          <WrapperContact>

            <CustomAnchor
              href='https://wa.me/5521975606376'
              target='_blank'
              label="+55 21 97560-6376"
            >
              <Icon src={phoneImg} size='small' />
            </CustomAnchor>

          </WrapperContact>
          <WrapperContact>

            <CustomAnchor
              href='mailto: mmrosatab@gmail.com'
              target='_blank'

              label="mmrosatab@gmail.com"
            >
              <Icon src={letterImg} size='small' />
            </CustomAnchor>

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