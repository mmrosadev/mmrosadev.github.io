import { 
    Route, 
    Routes as DomRoutes, 
    BrowserRouter 
} from "react-router-dom"
import { 
    Home,
    Portfolio,
    Resume,
    Classes,
    Budgets,
    Contact,
    NoMatch
} from "@/views"
import { Footer, NavBar } from "@/components"

export function Routes(){
    return (
        <BrowserRouter>
            <NavBar/>
            <DomRoutes>
                <Route path="/" element={<Home/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/classes" element={<Classes/>}/>
                <Route path="/budgets" element={<Budgets/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path='*' element={<NoMatch/>} />
            </DomRoutes>
            <Footer/>
        </BrowserRouter>
    )
}
