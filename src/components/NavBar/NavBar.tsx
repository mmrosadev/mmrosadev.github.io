import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
    brasilFlagImg,
    usaFlagImg,
    spainFlagImg,
    infinityImg,
    githubImg,
    linkedinImg,
    menuImg,
    crossImg,
} from '@/assets'
import {
    NavBarContainer,
    UnorderedList,
    ListItem,
    FlagsContainer,
    LogoContainer,
    Logo,
    NavBarLinksAndButtonsContainer,
    SocialMediaAndFlagsContainer,
    SocialMediaContainer,
    MenuButton,
    CrossButton,
    Icon
} from './styles'
import i18n from '@/i18n/i18'
import { NavBarLink, CustomAnchor } from '@/components'
import { CustomButton } from '../CustomButton'

type LanguageOptions = 'en' | 'es' | 'pt'
const LANG_KEY = 'LANG_REACT_APP'

export function NavBar(): JSX.Element {

    const { t } = useTranslation()
    const [openMenu, setOpenMenu] = useState(false)

    const handleChangeLanguage = (language: LanguageOptions) => {
        setLanguage(language)
        setLanguageOnStorage(language)
    }

    const setLanguage = (language: LanguageOptions) => {
        i18n.changeLanguage(language)
    }

    const setLanguageOnStorage = (language: LanguageOptions) => {
        if (window.localStorage) {
            window.localStorage.setItem(LANG_KEY, language)
        }
    }

    const loadStorageLanguage = () => {
        if (window.localStorage) {
            const language = window.localStorage.getItem(LANG_KEY) as LanguageOptions

            if (language && language.length > 0) {
                setLanguage(language)
            }
        }
    }

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        loadStorageLanguage()
    }, [])

    return (
        <NavBarContainer>
            <LogoContainer>
                <Logo src={infinityImg} alt="infinity image" />
            </LogoContainer>
            <MenuButton
                type="button"
                onClick={toggleMenu}
                open={openMenu}
            >
                <Icon src={menuImg} />
            </MenuButton>
            <CrossButton
                type="button"
                onClick={toggleMenu}
                open={openMenu}
            >
                <Icon src={crossImg} />
            </CrossButton>

            <NavBarLinksAndButtonsContainer
                id='navbar-links-buttons'
                open={openMenu}
            >
                <UnorderedList>
                    <ListItem><NavBarLink to='/'>{t('home')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/portfolio'>{t('portfolio')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/resume'>{t('resume')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/classes'>{t('classes')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/budgets'>{t('budgets')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/contact'>{t('contact')}</NavBarLink></ListItem>
                </UnorderedList>

                <SocialMediaAndFlagsContainer>
                    <SocialMediaContainer>
                        <CustomAnchor
                            href='https://github.com/mmrosatab'
                            target='_blank'
                        >
                            <Icon src={githubImg} size='big' />
                        </CustomAnchor>

                        <CustomAnchor
                            href='https://www.linkedin.com/in/mmrosatab/'
                            target='_blank'
                        >
                            <Icon src={linkedinImg} size='big' />
                        </CustomAnchor>
                    </SocialMediaContainer>
                    <FlagsContainer>
                        <CustomButton
                            size='middle'
                            onClick={() => handleChangeLanguage('pt')}
                        >
                            <Icon src={brasilFlagImg} />
                        </CustomButton>
                        <CustomButton
                            size='middle'
                            onClick={() => handleChangeLanguage('es')}
                        >
                            <Icon src={spainFlagImg} />
                        </CustomButton>
                        <CustomButton
                            size='middle'
                            onClick={() => handleChangeLanguage('en')}
                        >
                            <Icon src={usaFlagImg} />
                        </CustomButton>
                    </FlagsContainer>
                </SocialMediaAndFlagsContainer>
            </NavBarLinksAndButtonsContainer>
        </NavBarContainer>
    )
}