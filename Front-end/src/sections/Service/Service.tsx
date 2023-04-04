import { motion } from "framer-motion"
import { Heading } from "../../components/Heading/Heading"
import { textVariant } from "../../utils/motion"
import { List } from "./components/List"

export const Service = () => {
    return (
        <motion.section initial="hidden" whileInView="show" variants={textVariant(0.1)} className="py-10 flex flex-col gap-20 items-center px-10 md:px-40" id="service">
            <Heading>
                Nossos Serviços
            </Heading>
            <List/>
        </motion.section>
    )
}