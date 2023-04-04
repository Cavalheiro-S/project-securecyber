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
            className={twMerge("flex items-center justify-center bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-opacity-70 transition", className, props.disabled && "bg-opacity-70")}>
            {children}
        </button >
    )
})
