import { Text } from "../Text/Text"


export const Loading = () => {

    return (
        <div className="flex flex-col gap-4 justify-center items-center bg-transparent">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary">
            </div>
            <Text>Carregando ...</Text>
        </div>
    )
}