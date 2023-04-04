import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import { Text } from '../../components/Text/Text'

export const Footer = () => {
    return (
        <footer className="grid grid-cols-1 grid-rows-2 justify-center py-10">
            <ul className='flex gap-4 row-end-1 place-self-center '>
                <a href="https://linkedin.com.br" target="_blank">
                    <li className='p-4 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors'>
                        <LinkedinLogo className='h-6 w-6' />
                    </li>
                </a>
                <a href="https://instagram.com.br" target="_blank">
                    <li className='p-4 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors'>
                        <InstagramLogo className='h-6 w-6' />
                    </li>
                </a>
                <a href="https://www.whatsapp.com/" target="_blank">
                    <li className='p-4 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors'>
                        <WhatsappLogo className='h-6 w-6' />
                    </li>
                </a>
            </ul>
            <Text className='row-start-2 text-center'>Feito por Lucas Cavalheiro 2023</Text>
        </footer>
    )
}
