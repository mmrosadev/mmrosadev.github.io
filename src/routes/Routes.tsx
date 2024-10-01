import { 
    Route, 
    Routes as DomRoutes, 
    HashRouter 
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
        <HashRouter>
            <NavBar/>
            <DomRoutes>
                <Route path="/" Component={Home}/>
                <Route path="/portfolio" Component={Portfolio}/>
                <Route path="/resume" Component={Resume}/>
                <Route path="/classes" Component={Classes}/>
                <Route path="/budgets" Component={Budgets}/>
                <Route path="/contact" Component={Contact}/>
                <Route path='*' Component={NoMatch} />
            </DomRoutes>
            <Footer/>
        </HashRouter>
    )
}
