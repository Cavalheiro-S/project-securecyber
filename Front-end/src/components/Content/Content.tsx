import { About } from "../../sections/About/About"
import { Contact } from "../../sections/Contact/Contact"
import { Footer } from "../../sections/Footer/Footer"
import { Home } from "../../sections/Home/Main"
import { Plan } from "../../sections/Plan/Plan"
import { Service } from "../../sections/Service/Service"

export const Content = () => {
    return (
        <main>
            <Home/>
            <About/>
            <Service/>
            <Plan/>
            <Contact/>
            <Footer/>
        </main>
    )
}