import { ReactNode } from "react"
import { services } from "../../../constants"
import { ItemList } from "./ItemList"

export const List = () => {

    const renderItemList = (title: string, text: string, icon: ReactNode, index: number) => {
        return (
            <li key={title + index} className="flex flex-col gap-6">
                <ItemList
                    title={title}
                    text={text}
                    icon={icon}
                />
            </li>
        )
    }

    return (
        <ul className="flex flex-col md:grid grid-cols-2 grid-rows-2 gap-6">
            {services.cards.map((service, index) => renderItemList(service.name, service.description, <service.icon />, index))}
        </ul>
    )
}