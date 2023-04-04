import { Heading } from "../../components/Heading/Heading"
import { Text } from "../../components/Text/Text"
import WallpaperAbout from "../../assets/images/wallpaper-about.png"
import { about } from "../../constants"
import { motion } from "framer-motion"
import { textVariant } from "../../utils/motion"

export const About = () => {

    return (
        <section className="flex flex-col gap-6 py-10" id="about">
            <motion.div initial="hidden" whileInView="show" variants={textVariant()} className="px-10 md:px-40 flex flex-col gap-6 mb-10">
                <Heading >
                    Sobre nós
                </Heading>
                {about.content.paragraphers.map((paragraph, index) => (
                    <Text asChild key={paragraph + index}>
                        <motion.p >
                            {paragraph}
                            <br />
                        </motion.p>
                    </Text>
                ))}

            </motion.div>
            <motion.img src={WallpaperAbout} />
        </section>
    )
}