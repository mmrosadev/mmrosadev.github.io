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
            urlCode: 'https://github.com/mmrosatab/Raquels-Marriage',
            urlApplication: 'https://raquels-marriage.vercel.app/',
        },
        {
            id: 1,
            imageSource: nozbooksImg,
            title: 'NozBooks',
            subtitle: t('appnozbookDescription'),
            urlCode: 'https://github.com/mmrosatab/nozbooks-app',
            urlApplication: 'https://nozbooks-app.vercel.app/',
        },
        {
            id: 2,
            imageSource: chartplotImg,
            title: 'Chartplot challenge',
            subtitle: t('appChartPlotDescription'),
            urlCode: 'https://github.com/mmrosatab/challenge-chart-plot',
            urlApplication: 'https://challenge-chart-plot.vercel.app/',
        },
        {
            id: 3,
            imageSource: postsUpvotesImg,
            title: 'Post and upvotes challenge',
            subtitle: t('appPostsUpvotes'),
            urlCode: 'https://github.com/mmrosatab/challenge-posts-and-upvotes',
            urlApplication: 'https://challenge-posts-and-upvotes.vercel.app/',
        },
        {
            id: 4,
            imageSource: viacepImg,
            title: 'Address search by zipcode',
            subtitle: t('appViaCep'),
            urlCode: 'https://github.com/mmrosatab/to-explore-viacep-api',
            urlApplication: 'https://to-explore-viacep-api.vercel.app/',
        },
        {
            id: 5,
            imageSource: phonebookImg,
            title: 'Phonebook api',
            subtitle: t('apiPhonebookBackend'),
            urlCode: 'https://github.com/mmrosatab/phonebook-backend',
            urlApplication: 'https://challenge-chart-plot.vercel.app/',
        },
        {
            id: 6,
            imageSource: mywebisteImg,
            title: 'Portfolio',
            subtitle: t('myWebsite'),
            urlCode: 'https://github.com/mmrosatab/mmrosatab.github.io',
            urlApplication: 'https://mmrosatab.github.io/',
        },
        {
            id: 7,
            imageSource: relembrarOntologyImg,
            title: 'Ontologia Relembrar',
            subtitle: t('ontologiaRelembrar'),
            urlCode: 'https://github.com/mmrosatab/WebsiteOntologiaRelembrar',
            urlApplication: 'https://ontologiarelembrar.github.io/',
        },
        {
            id: 8,
            imageSource: bookImg,
            title: 'Book Rental Control api',
            subtitle: t('bookRentalControlApi'),
            urlCode: 'https://github.com/mmrosatab/book-rental-control-backend',
            urlApplication: 'https://github.com/mmrosatab/book-rental-control-backend',
        },
    ]
}