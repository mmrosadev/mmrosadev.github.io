import { useTranslation } from 'react-i18next'

import {
    raquelMarriegeImg,
    nozbooksImg,
    chartplotImg,
    postsUpvotesImg,
    viacepImg,
    phonebookImg
} from '@/assets'

export function useProjects() {

    const { t } = useTranslation()

    return [
        {
            imageSource: raquelMarriegeImg,
            title: t('titleCardMarriage'),
            subtitle: t('subtitleCardMarriage'),
            urlCode: 'https://github.com/mmrosatab/Raquels-Marriage',
            urlApplication: 'https://raquels-marriage.vercel.app/',
        },
        {
            imageSource: nozbooksImg,
            title: 'NozBooks',
            subtitle: t('appnozbookDescription'),
            urlCode: 'https://github.com/mmrosatab/nozbooks-app',
            urlApplication: 'https://nozbooks-app.vercel.app/',
        },
        {
            imageSource: chartplotImg,
            title: 'Chartplot challenge',
            subtitle: t('appChartPlotDescription'),
            urlCode: 'https://github.com/mmrosatab/challenge-chart-plot',
            urlApplication: 'https://challenge-chart-plot.vercel.app/',
        },
        {
            imageSource: postsUpvotesImg,
            title: 'Post and upvotes challenge',
            subtitle: t('appPostsUpvotes'),
            urlCode: 'https://github.com/mmrosatab/challenge-posts-and-upvotes',
            urlApplication: 'https://challenge-posts-and-upvotes.vercel.app/',
        },
        {
            imageSource: viacepImg,
            title: 'Address search by zipcode',
            subtitle: t('appViaCep'),
            urlCode: 'https://github.com/mmrosatab/to-explore-viacep-api',
            urlApplication: 'https://to-explore-viacep-api.vercel.app/',
        },
        {
            imageSource: phonebookImg,
            title: 'Phonebook api',
            subtitle: t('apiPhonebookBackend'),
            urlCode: 'https://github.com/mmrosatab/phonebook-backend',
            urlApplication: 'https://challenge-chart-plot.vercel.app/',
        },
    ]
}