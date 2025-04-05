import { useTranslation } from 'react-i18next'
import {
    raquelMarriegeImg,
    nozbooksImg,
    chartplotImg,
    postsUpvotesImg,
    viacepImg,
    mywebisteImg,
    relembrarOntologyImg,
    phonebookImg,
    bookImg
} from '@/assets'

export function useProjects() {

    const { t } = useTranslation()

    return [
        {
            id: 0,
            imageSource: raquelMarriegeImg,
            title: t('titleCardMarriage'),
            subtitle: t('subtitleCardMarriage'),
            urlCode: 'https://github.com/mmrosadev/Raquels-Marriage',
            urlApplication: 'https://raquels-marriage.vercel.app/',
        },
        {
            id: 1,
            imageSource: nozbooksImg,
            title: 'NozBooks',
            subtitle: t('appnozbookDescription'),
            urlCode: 'https://github.com/mmrosadev/nozbooks-app',
            urlApplication: 'https://nozbooks-app.vercel.app/',
        },
        {
            id: 2,
            imageSource: chartplotImg,
            title: 'Chartplot challenge',
            subtitle: t('appChartPlotDescription'),
            urlCode: 'https://github.com/mmrosadev/challenge-chart-plot',
            urlApplication: 'https://challenge-chart-plot.vercel.app/',
        },
        {
            id: 3,
            imageSource: bookImg,
            title: 'Book Rental Control api',
            subtitle: t('bookRentalControlApi'),
            urlCode: 'https://github.com/mmrosadev/book-rental-control-backend',
            urlApplication: 'https://github.com/mmrosadev/book-rental-control-backend',

        },
        {
            id: 4,
            imageSource: mywebisteImg,
            title: 'Portfolio',
            subtitle: t('myWebsite'),
            urlCode: 'https://github.com/mmrosadev/mmrosadev.github.io',
            urlApplication: 'https://mmrosadev.github.io/',
        },
        {
            id: 5,
            imageSource: phonebookImg,
            title: 'Phonebook api',
            subtitle: t('apiPhonebookBackend'),
            urlCode: 'https://github.com/mmrosadev/phonebook-backend',
            urlApplication: 'https://github.com/mmrosadev/phonebook-backend',
        },
        {
            id: 6,
            imageSource: viacepImg,
            title: 'Address search by zipcode',
            subtitle: t('appViaCep'),
            urlCode: 'https://github.com/mmrosadev/to-explore-viacep-api',
            urlApplication: 'https://to-explore-viacep-api.vercel.app/',
        },
        {
            id: 7,
            imageSource: relembrarOntologyImg,
            title: 'Ontologia Relembrar',
            subtitle: t('ontologiaRelembrar'),
            urlCode: 'https://github.com/mmrosadev/WebsiteOntologiaRelembrar',
            urlApplication: 'https://ontologiarelembrar.github.io/',
        },
        {
            id: 8,
            imageSource: postsUpvotesImg,
            title: 'Post and upvotes challenge',
            subtitle: t('appPostsUpvotes'),
            urlCode: 'https://github.com/mmrosadev/challenge-posts-and-upvotes',
            urlApplication: 'https://challenge-posts-and-upvotes.vercel.app/',
        },
    ]
}