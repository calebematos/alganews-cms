import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import * as B from "./Button.styles"

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  variant: 'primary' | 'danger' | 'text'
  label: React.ReactNode
}

export default function Button({ label, variant, ref, ...props }: ButtonProps){
  return <B.Wrapper 
    variant={variant}
    {...props}
    >
    {label}
  </B.Wrapper>
}