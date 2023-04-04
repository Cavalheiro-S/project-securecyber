import { Check, X } from "@phosphor-icons/react"
import { twMerge } from "tailwind-merge"
import { Button } from "../../../components/Button/Button"
import { Heading } from "../../../components/Heading/Heading"
import { Text } from "../../../components/Text/Text"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    description: string,
    value: string,
    optionsFilled: number,
}

export const Card = ({ className, description, value, optionsFilled, ...props }: CardProps) => {

    const renderOptions = () => {
        const options = []
        for (let i = 0; i < 5; i++) {

            const optionFilled = i < optionsFilled ? true : false

            options.push(
                <div key={description + i} className="flex items-center gap-3">
                    {optionFilled ? <Check className="text-primary h-6 w-6" /> : <X className="h-6 w-6"/>}
                    {optionFilled ? <Text className="text-neutral-300">Lorem Ipsum</Text> : <Text className="text-neutral-300 line-through">Lorem Ipsum</Text>}
                </div>
            )
        }
        return options
    }
    return (
        <div className={twMerge("flex flex-col gap-10 py-10 px-10 md:px-20 bg-neutral-700 rounded-lg ", className)} {...props}>
            <div className="flex flex-col gap-2 items-center">
                <Text>{description}</Text>
                <Heading className="text-4xl">R${value}</Heading>
                <Text className="text-primary">por mês</Text>
            </div>
            <div>
                {renderOptions()}
            </div>
            <Button>Assinar</Button>
        </div>
    )
}
