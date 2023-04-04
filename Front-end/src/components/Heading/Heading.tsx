import { Slot } from "@radix-ui/react-slot"
import { twMerge } from "tailwind-merge"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode,
    asChild?: boolean
}

export const Heading = ({ children, asChild, className, ...props }: HeadingProps) => {

    const Component = asChild ? Slot : 'h2'

    return (
        <Component
            {...props}
            className={twMerge("text-4xl font-title font-semibold ", className) }>
            {children}
        </Component>
    )
}