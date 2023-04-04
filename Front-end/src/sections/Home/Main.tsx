import { useContext } from "react"
import background from "../../assets/images/wallpaper.png"
import { Button } from "../../components/Button/Button"
import { Header } from "../../components/Header/Header"
import { Heading } from "../../components/Heading/Heading"
import { Slider } from "../../components/Slider/Slider"
import { Text } from "../../components/Text/Text"
import { NoticeContext } from "../../contexts/NoticeContext"
export const Home = () => {

    const { notices } = useContext(NoticeContext);

    return (
        <div id="home" style={{ backgroundImage: `url(${background})` }} className={`bg-cover `}>
            <Header />
            {notices.length > 0 && < Slider />}
            <div className="flex flex-col md:items-start items-center gap-6 max-w-2xl py-40 mx-10 md:mx-40">
                <Heading asChild>
                    <h1 >Protegendo seus dados,  protegendo seu futuro</h1>
                </Heading>
                <Text>
                    Nossa missão é proteger as informações e dados valiosos de nossos clientes, garantindo que eles possam operar com segurança e tranquilidade.
                </Text>
                <Button className="w-40">
                    <a href="#contact">
                        Entre em contato
                    </a>
                </Button>
            </div>
        </div>
    )
}
