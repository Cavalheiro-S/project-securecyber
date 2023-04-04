import { Slot } from "@radix-ui/react-slot"
import { Heading } from "../../../components/Heading/Heading"
import { Text } from "../../../components/Text/Text"

interface ItemListProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode,
    title: string,
    text: string,

}

export const ItemList = ({ children, className, icon, text, title, ...props }: ItemListProps) => {
    return (
        <div {...props} className={"flex md:flex-row flex-col items-center gap-6 p-4 " + className}>
            <div className="flex items-center justify-center p-4 rounded-full bg-zinc-800">
                <Slot className="w-8 h-8 text-primary">
                    {icon}
                </Slot>
            </div>
            <div className="flex flex-col gap-4 md:items-start items-center">
                <Heading className="text-2xl" asChild>
                    <h5>{title}</h5>
                </Heading>
                <Text className="text-center md:text-start">{text}</Text>
                <Text className="underline decoration-primary underline-offset-4 decoration-2">Leia Mais</Text>
            </div>
            {children}
        </div>
    )
}

