import { twMerge } from "tailwind-merge"
import { Text } from "../Text/Text"

interface LoadingProps {
    className?: string
}

export const Loading = ({ className }: LoadingProps) => {

    return (
        <div className={twMerge("flex flex-col gap-4 justify-center items-center bg-transparent ", className)}>
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary">
            </div>
            <Text>Carregando ...</Text>
        </div>
    )
}