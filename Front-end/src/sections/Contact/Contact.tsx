import { Envelope, MapPinLine, Phone } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Heading } from '../../components/Heading/Heading'
import { textVariant } from '../../utils/motion'
import { ContactInfo } from './components/Contact_Info/ContactInfo'
import { Form } from './components/Form/Form'

export const Contact = () => {
    return (

        <motion.section variants={textVariant()} initial="hidden" whileInView={"show"} className='flex flex-col gap-10 px-10 md:px-40 py-20' id='contact'>
            <Heading className='text-center'>Entre em contato</Heading>
            <div className='flex flex-col md:grid grid-cols-2 gap-6 md:gap-0 '>
                <div className='flex flex-col gap-6'>
                    <ContactInfo
                        title='Localização'
                        text='Rua A108 Adam Street, New York, NY 535022'
                        icon={<MapPinLine />} />
                    <ContactInfo
                        title='Email'
                        text='info@example.com'
                        icon={<Envelope />} />
                    <ContactInfo
                        title='Telefone'    
                        text='+55 41 9999 9999'
                        icon={<Phone />} />
                </div>
                <Form />
            </div>
        </motion.section>
    )
}
