import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

interface InputTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> { }

const InputRoot = ({ children, className }: InputRootProps) => {
    return (
        <div className={twMerge('p-2 border bg-neutral-200 border-white rounded', className)}>
            {children}
        </div>
    )
}

const InputInput = forwardRef<HTMLInputElement, InputInputProps>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={twMerge('bg-transparent text-neutral-800 w-full outline-none placeholder:text-neutral-400', className)} />
    )
})

const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(({ className, ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            {...props}
            className={twMerge('bg-transparent text-neutral-800 w-full outline-none', className)} />
    )
})

export const Input = {
    Root: InputRoot,
    Input: InputInput,
    TextArea: InputTextArea
}
