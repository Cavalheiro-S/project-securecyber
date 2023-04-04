import { Paperclip, X, XCircle } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"
import { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { Button } from "../../../components/Button/Button"
import { Heading } from "../../../components/Heading/Heading"
import { Input } from "../../../components/Input/Input"
import { Loading } from "../../../components/Loading/Loading"
import { Text } from "../../../components/Text/Text"
import { client } from "../../../utils/client"
import { NoticeContext } from "../../../contexts/NoticeContext"

interface FormProps {
    title: string
    description: string
}

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export const Form = () => {

    const [image, setImage] = useState<File | null>(null);
    const [imageDrag, setImageDrag] = useState<boolean>(false);
    const [modalOpen, setmodalOpen] = useState(false);
    const [loading, setloading] = useState(false);
    const { register, handleSubmit, formState: { errors }, setError } = useForm<FormProps>();
    const { addNotice } = useContext(NoticeContext);

    const onSubmit: SubmitHandler<FormProps> = async (data) => {

        try {
            setloading(true);
            const imageAsset = await handleUploadImage(image!);
            if (!imageAsset) throw new ValidationError("Erro ao enviar a imagem");
            await addNotice(data.title, data.description, imageAsset._id);
            setmodalOpen(false);
        }
        catch (e) {
            if (e instanceof ValidationError)
                setError("root", { message: e.message });
            else {
                setError("root", { message: "Erro ao enviar a imagem" });
                console.log(e);
            }

        }
        finally {
            setloading(false);
        }

    }


    const handleUploadImage = async (image: File) => {
        setloading(true);
        const imagesTypesAllowed = ["image/jpeg", "image/png", "image/jpg"];
        if (!imagesTypesAllowed.includes(image.type))
            throw new ValidationError("Formato de imagem inválido");

        if (image.size > 2000000)
            throw new ValidationError("Tamanho da imagem inválido");

        const imageAsset = await client.assets.upload("image", image);

        return imageAsset;
    }

    const handleDropImage = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setImageDrag(false);
        setImage(event.dataTransfer.files[0]);
    }

    const renderImageFileContent = () => {

        if (image)
            return (
                <>
                    <X onClick={() => setImage(null)} />
                    <img src={URL.createObjectURL(image)} alt={image.name} className="max-h-16" />
                </>
            )

        return (
            <>
                <Paperclip className="w-6 h-6" />
                <Text className="text-center">
                    <span className="text-primary">Clique</span> ou arraste para enviar uma imagem do <br />
                    seu computador
                </Text>
                <Input.Input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onDrop={handleDropImage}
                    onChange={(event) => event.target.files && setImage(event.target.files[0])}
                    onClick={(event) => image && event.preventDefault()}
                    onDragEnter={() => setImageDrag(true)}
                    onDragLeave={() => setImageDrag(false)}
                />
            </>
        )
    }

    return (
        <Dialog.Root open={modalOpen} onOpenChange={setmodalOpen}>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Trigger asChild>
                <Button className='hover:bg-white hover:text-primary'>
                    Adicionar
                </Button>
            </Dialog.Trigger>
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-6 bg-background">

                {loading ? <Loading /> : <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-96">
                    <div className="flex justify-between w-full items-end gap-6">
                        <Heading>Adicionar Notícia</Heading>
                        <Dialog.Close asChild>
                            <XCircle className="text-gray-400 h-6 w-6" />
                        </Dialog.Close>
                    </div>
                    <label>
                        Capa da notícia
                        <Input.Root
                            className={twMerge("relative transition", imageDrag ? " ring-inset ring-4 ring-primary" : "")}>
                            <div className="flex flex-col items-center justify-between gap-2 text-neutral-500 h-full px-3">
                                {renderImageFileContent()}

                            </div>
                        </Input.Root>
                        {errors.root && <Text className="text-red-500">{errors.root.message}</Text>}
                    </label>
                    <label>
                        Titulo
                        <Input.Root>
                            <Input.Input {...register("title", { required: true })} />
                        </Input.Root>
                        {errors.title && <Text className="text-red-500">Campo obrigatório</Text>}
                    </label>
                    <label>
                        Descrição
                        <Input.Root>
                            <Input.TextArea {...register("description", { max: 200 })} />
                        </Input.Root>
                        {errors.description && <Text className="text-red-500">Máximo de 200 caracteres</Text>}
                    </label>

                    <Button type="submit">Adicionar</Button>
                </form>}
            </Dialog.Content>
        </Dialog.Root >
    )
}