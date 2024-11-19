import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n/i18'
import { NavBarLink } from '@/components'
import {
    brasilFlagImg,
    usaFlagImg,
    spainFlagImg,
    infinityImg,
} from '@/assets'
import {
    NavBarContainer,
    UnorderedList,
    ListItem,
    FlagsContainer,
    LogoContainer,
    Logo,
    NavBarLinksContainer,
    Icon,
    ListFlagsItem,
    MenuButtonContainer
} from './styles'
import { CustomButton } from './CustomButton'
import { ToogleButton } from './ToogleButton'

type LanguageOptions = 'en' | 'es' | 'pt'
const LANG_KEY = 'LANG_REACT_APP'

export function NavBar(): JSX.Element {

    const { t } = useTranslation()
    const [openMenu, setOpenMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)

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
        const handleScroll = () => {
            setScrolled(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        loadStorageLanguage()
    }, [])


    return (
        <NavBarContainer
            id='navbar'
            className={scrolled ? 'navbar scrolled' : 'navbar'}
        >
            <LogoContainer>
                <Logo src={infinityImg} alt='infinity image' />
            </LogoContainer>
            <MenuButtonContainer
                open={openMenu}
            >
                <ToogleButton
                    open={openMenu}
                    onClick={toggleMenu}
                />
            </MenuButtonContainer>
            <NavBarLinksContainer
                id='navbar-links-buttons'
                open={openMenu}
            >
                <UnorderedList>
                    <ListItem><NavBarLink to='/'>{t('home')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/about-me'>{t('aboutMe')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/portfolio'>{t('portfolio')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/resume'>{t('resume')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/classes'>{t('classes')}</NavBarLink></ListItem>
                    <ListItem><NavBarLink to='/contact'>{t('contact')}</NavBarLink></ListItem>
                    <ListFlagsItem open={openMenu}>
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
                    </ListFlagsItem>
                </UnorderedList>
            </NavBarLinksContainer>
            <FlagsContainer
                open={openMenu}
            >
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
        </NavBarContainer>
    )
}