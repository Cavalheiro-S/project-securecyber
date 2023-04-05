import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { header } from "../../constants";
import { useGetScroll } from "../../hooks/useScreenScrool";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import { List } from "@phosphor-icons/react";
import { useState } from "react";

export const Header = () => {

    const { scrollY } = useGetScroll();
    const { width } = useWindowDimensions();
    const [open, setOpen] = useState(false);

    const renderHeader = () => {
        return (
            <motion.header layout className={
                twMerge("flex top-0 flex-col lg:grid grid-rows-1 grid-cols-3 py-8  px-40 justify-between items-center font-semibold bg-transparent z-50",
                    scrollY > 100 && "bg-background w-screen border-b fixed border-white",
                    width < 1024 && "flex-row gap-4 px-4 justify-between w-screen relative",
                    scrollY > 100 && width < 1024 && "fixed"                    

                )} >
                <Heading className="text-2xl text-center col-span-1">SecureCyber</Heading>
                {width > 768 ? renderHeaderMenu() : renderBurguerMenu()}
            </motion.header>
        )
    }

    const renderBurguerMenu = () => {
        return (
            <>
                <List className="w-6 h-6" onClick={() => setOpen(!open)} />
                {
                    open && (
                        <div className="absolute top-full bg-background z-50 left-0 p-4 w-screen">
                            <ul className="flex flex-col gap-4">
                                {header.links.map((link, index) => renderItemNav(link.name, link.path, index))}
                                <Text className="hover:text-primary md:text-end" asChild>
                                    <Link to="/notice">
                                        Notícias
                                    </Link>
                                </Text>
                            </ul>

                        </div>
                    )
                }
            </>
        )
    }

    const renderHeaderMenu = () => {
        return (
            <>
                <nav className="flex items-center w-full justify-center col-start-2 col-end-2">
                    <ul className="flex gap-4">
                        {header.links.map((link, index) => renderItemNav(link.name, link.path, index))}
                    </ul>
                </nav>
                <Text className="hover:text-primary md:text-end" asChild>
                    <Link to="/notice">
                        Notícias
                    </Link>
                </Text>
            </>
        )
    }

    const renderItemNav = (text: string, href: string, index: number) => (
        <li onClick={() => setOpen(!open)} key={text + index} className="hover:text-primary">
            <Text asChild>
                <a href={"/" + href}>
                    {text}
                </a>
            </Text>
        </li>
    )

    return renderHeader()
}