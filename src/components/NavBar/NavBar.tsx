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
    FlagButton,
    LogoContainer,
    Logo,
    NavBarLinksAndButtonsContainer,
    SocialMediaAndFlagsContainer,
    SocialMediaContainer,
    MenuButton,
    CrossButton,
} from './styles'
import i18n from '@/i18n/i18'
import { NavBarLink, CustomAnchor } from '@/components'

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

    const loadStorageInformation = () => {
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
        loadStorageInformation()
    }, [])

    return (
        <NavBarContainer>
            <LogoContainer>
                <Logo src={infinityImg} alt="infinity image" />
            </LogoContainer>
            <MenuButton
                type="button"
                $imageSource={menuImg}
                onClick={toggleMenu}
                id='menu-button'
                open={openMenu}
            />
            <CrossButton
                type="button"
                $imageSource={crossImg}
                onClick={toggleMenu}
                id='cross-button'
                open={openMenu}
            />
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
                            $imageSource={githubImg}
                            href='https://github.com/mmrosatab'
                            target='_blank'
                        />
                        <CustomAnchor
                            $imageSource={linkedinImg}
                            href='https://www.linkedin.com/in/mmrosatab/'
                            target='_blank'
                        />
                    </SocialMediaContainer>
                    <FlagsContainer>
                        <FlagButton
                            type="button"
                            $imageSource={brasilFlagImg}
                            onClick={() => handleChangeLanguage('pt')}
                        />
                        <FlagButton
                            type="button"
                            $imageSource={spainFlagImg}
                            onClick={() => handleChangeLanguage('es')}
                        />
                        <FlagButton
                            type="button"
                            $imageSource={usaFlagImg}
                            onClick={() => handleChangeLanguage('en')}
                        />
                    </FlagsContainer>
                </SocialMediaAndFlagsContainer>
            </NavBarLinksAndButtonsContainer>
        </NavBarContainer>
    )
}