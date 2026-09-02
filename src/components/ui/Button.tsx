import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#23361D] text-white hover:bg-[#1b2916] shadow-[0_4px_15px_rgba(35,54,29,0.3)] hover:shadow-[0_8px_25px_rgba(35,54,29,0.4)] hover:-translate-y-0.5",
        primary:
          "bg-[#23361D] text-white hover:bg-[#2e4626] shadow-[0_4px_15px_rgba(35,54,29,0.3)] hover:shadow-[0_8px_25px_rgba(35,54,29,0.4)] hover:-translate-y-0.5",
        secondary:
          "bg-[#798576] text-white hover:bg-[#5a6558] shadow-[0_4px_15px_rgba(121,133,118,0.3)] hover:shadow-[0_8px_25px_rgba(121,133,118,0.4)] hover:-translate-y-0.5",
        warm:
          "bg-[#C37C24] text-white hover:bg-[#995f19] shadow-[0_4px_15px_rgba(195,124,36,0.3)] hover:shadow-[0_8px_25px_rgba(195,124,36,0.4)] hover:-translate-y-0.5",
        outline:
          "border-2 border-[#23361D] text-[#23361D] bg-transparent hover:bg-[#23361D] hover:text-white hover:-translate-y-0.5",
        ghost: "hover:bg-[#eef2eb] text-[#273029] hover:text-[#23361D]",
        link: "text-[#23361D] underline-offset-4 hover:underline",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
