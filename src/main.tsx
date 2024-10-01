import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Routes } from '@/routes'
import GlobalStyle from './styles'
import i18n from './i18n/i18'

const LANG_KEY = 'LANG_REACT_APP'

const setInitialLanguage = async () => {
  const language = window.localStorage.getItem(LANG_KEY)

  if (language && language.length > 0) {
    await i18n.changeLanguage(language)
  }
}

const initApp = async () => {

  await setInitialLanguage()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <Routes />
      </I18nextProvider>
    </React.StrictMode>
  )
}

initApp()