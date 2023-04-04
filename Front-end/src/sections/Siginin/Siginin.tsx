import { FirebaseError } from "firebase/app";
import { SyntheticEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { useAuth } from "../../hooks/useAuth";
import { returnErrorMessage } from "../../utils/firebase";
import { Loading } from "../../components/Loading";
import { CircleNotch } from "@phosphor-icons/react";
import { Header } from "../../components/Header";


interface Inputs {
    email: string;
    password: string;
}

export const Signin = () => {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
        try {
            setLoading(true);
            event?.preventDefault();
            await signIn(data.email, data.password);
            navigate("/notice");
        }
        catch (error) {
            if (error instanceof FirebaseError)
                setError("email", { type: "manual", message: returnErrorMessage(error.code) })
        }
        setLoading(false);
    };
    return (
        <>
            <Header />
            <div className="flex w-full h-[90vh] justify-center mt-12 md:items-center px-4 md:px-0">
                <form onSubmit={handleSubmit(onSubmit)} className="w-96 flex flex-col gap-6 md:mt-0">
                    <div>
                        <Heading className="text-font mb-2">Login</Heading>
                        <Text>Insira suas credenciais para acessar a plataforma</Text>
                    </div>
                    <label className="flex flex-col gap-2">
                        Email
                        <Input.Root>
                            <Input.Input {...register("email", { required: "É necessário preencher o email" })} />
                        </Input.Root>
                        {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}
                    </label>
                    <label className="flex flex-col gap-2">
                        Senha
                        <Input.Root>
                            <Input.Input {...register("password", { required: "É necessário preencher a senha" })} type="password" />
                        </Input.Root>
                        {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}
                    </label>
                    <div className="flex flex-col gap-4">
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? <CircleNotch className="animate-spin text-white w-6 h-6" /> : "Entrar"}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};