import { CircleNotch, Paperclip, X, XCircle } from "@phosphor-icons/react"
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
import { ValidationError } from "../../../exceptions/ValidationException"

interface FormProps {
    title: string
    description: string
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
                    <img src={URL.createObjectURL(image)} alt={image.name} className="max-h-16" />
                    <X
                        className="hover:cursor-pointer transition-colors duration-200 text-primary hover:text-red-500 h-6 w-6"
                        onClick={e => {
                            setImage(null)
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        } />
                </>
            )

        return (
            <>
                <Paperclip className="w-6 h-6" />
                <Text className="text-center">
                    <span className="text-primary">Clique</span> ou arraste para enviar uma imagem do <br />
                    seu dispositivo
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
                <Button className="w-full md:w-fit">
                    Adicionar
                </Button>
            </Dialog.Trigger>
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-6 bg-background w-full md:w-fit">

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:w-96 w-full">
                    <div className="flex md:flex-row flex-col-reverse justify-between w-full items-center md:items-end gap-6">
                        <Heading>Adicionar Notícia</Heading>
                        <Dialog.Close asChild>
                            <X className="text-gray-400 h-6 w-6 hover:text-red-500" />
                        </Dialog.Close>
                    </div>
                    <label>
                        Capa da notícia
                        <Input.Root
                            className={twMerge("relative transition", imageDrag ? " ring-inset ring-4 ring-primary" : "")}>
                            <div
                                className={
                                    twMerge("flex items-center gap-2 text-neutral-500 h-full px-3", image ? "flex-row justify-center" : "flex-col justify-between")}>
                                {renderImageFileContent()}

                            </div>
                        </Input.Root>
                        {errors.root && <Text className="text-red-500">{errors.root.message}</Text>}
                    </label>
                    <label>
                        Titulo
                        <Input.Root>
                            <Input.Input maxLength={30} {...register("title", { required: true })} />
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

                    <Button type="submit" disabled={loading}>
                        {loading ? <CircleNotch className="animate-spin text-white w-6 h-6" /> : "Adicionar"}
                    </Button>
                </form>
            </Dialog.Content>
        </Dialog.Root >
    )
}