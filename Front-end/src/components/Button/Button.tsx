import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...props }, ref) => {

    return (
        <button
            {...props}
            ref={ref}
            className={twMerge("bg-primary text-white font-semibold py-2 px-4 rounded hover:text-primary hover:bg-white transition", className)}>
            {children}
        </button >
    )
})
