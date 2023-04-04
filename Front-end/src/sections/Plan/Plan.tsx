import { motion } from "framer-motion"
import { Heading } from "../../components/Heading/Heading"
import { plans } from "../../constants"
import { textVariant } from "../../utils/motion"
import { Card } from "./components/Card"


export const Plan = () => {

    return (
        <motion.section initial="hidden" whileInView="show" variants={textVariant()} id="plan" className="py-10 flex flex-col gap-20 items-center px-10 md:px-40">
            <Heading>
                Nossos Planos
            </Heading>
            <div className="flex md:flex-row flex-col w-full gap-10 justify-center items-center md:items-start">
                {plans.cards.map((card, index) => (
                    <Card
                        key={card.name + index}
                        className="h-3/4 w-fit"
                        description={card.name}
                        value={card.value}
                        optionsFilled={card.options.filter(option => option.included === true).length} />
                ))}
            </div>
        </motion.section>
    )
}