import {
    Route,
    Routes as DomRoutes,
    HashRouter,
} from 'react-router-dom'
import {
    Home,
    AboutMe,
    Portfolio,
    Resume,
    Classes,
    Contact,
    NoMatch,
} from '@/views'
import { Footer, NavBar } from '@/components'

export function Routes() {
    return (
        <HashRouter>
            <NavBar />
            <DomRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/classes' element={<Classes />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NoMatch />} />
            </DomRoutes>
            <Footer />
        </HashRouter>
    )
}
