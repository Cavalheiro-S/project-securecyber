import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode,
    asChild?: boolean
}

export const Text = ({ children, asChild, className, ...props }: TextProps) => {

    const Component = asChild ? Slot : 'p'

    return (
        <Component
            {...props}
            className={twMerge("text-sans font-normal", className)}>
            {children}
        </Component>
    )
}