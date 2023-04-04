import React from 'react'
import { Button } from '../../../../components/Button/Button'
import { Input } from '../../../../components/Input/Input'

export const Form = () => {
    return (
        <form className='grid grid-cols-2 gap-4'>
            <label className='col-start-1'>
                Seu nome
                <Input.Root>
                    <Input.Input />
                </Input.Root>
            </label>
            <label className='col-start-2'>
                Seu e-mail
                <Input.Root>
                    <Input.Input type="email" />
                </Input.Root>
            </label>
            <label className='col-start-1 col-span-2'>
                Assunto
                <Input.Root>
                    <Input.Input />
                </Input.Root>
            </label>
            <label className='col-start-1 col-span-2'>
                Mensagem
                <Input.Root>
                    <Input.TextArea maxLength={300} className='max-h-48' />
                </Input.Root>
            </label>
            <Button className='col-start-2 place-self-end'>Enviar</Button>
        </form>)
}
