import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { Heading } from '../../../../components/Heading/Heading'
import { Text } from '../../../../components/Text/Text'

interface ContactInfoProps {
    icon: React.ReactNode,
    title: string,
    text: string,
}

export const ContactInfo = ({ icon, title, text }: ContactInfoProps) => {
    return (
        <div className='flex gap-6'>
            <Slot className='h-12 w-12 text-primary'>
                {icon}
            </Slot>
            <div className='flex flex-col gap-2'>
                <Heading className='text-xl'>{title}</Heading>
                <Text className='w-36'>{text}</Text>
            </div>
        </div>
    )
}
