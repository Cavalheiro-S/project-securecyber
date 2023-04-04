import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { header } from "../../constants";
import { useGetScroll } from "../../hooks/useScreenScrool";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";

export const Header = () => {

    const { scrollY } = useGetScroll();
    const { width } = useWindowDimensions();

    const renderItemNav = (text: string, href: string, index: number) => (
        <li key={text+index} className="hover:text-primary">
            <Text asChild>
                <a href={"/"+href}>
                    {text}
                </a>
            </Text>
        </li>
    )
    return (
        <>
            <motion.header layout className={
                twMerge("flex top-0 flex-col md:grid grid-rows-1 grid-cols-3 py-8 px-40 justify-between items-center font-semibold bg-transparent z-50",
                    scrollY > 100 ? "bg-background fixed w-screen border-b border-white" : "",
                    width < 768 ? "flex-col gap-4 px-4 justify-center" : ""
                )} >
                <Heading className="text-2xl text-center col-span-1">SecureCyber</Heading>
                <nav className="flex items-center w-full justify-center col-start-2 col-end-2">
                    <ul className="flex gap-4">
                        {header.links.map((link, index) => renderItemNav(link.name, link.path, index))}
                    </ul>
                </nav>
                <Text className="hover:text-primary" asChild>
                    <Link to="/notice">
                        Notícias
                    </Link>
                </Text>
            </motion.header>
        </>
    )
}