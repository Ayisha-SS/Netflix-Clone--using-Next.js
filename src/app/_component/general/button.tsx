import React from 'react'

interface ButtonProps{
    label: string;
    onClick?: ()=>void;
    className?: string;
    icon?: React.ReactNode; 
}
const Button :React.FC<ButtonProps>= ({label,onClick,className,icon}) => {
  return (
    <button className={`text-white bg-red-600 ${className}`} onClick={onClick}>
        {label}
        {icon}
    </button>
  )
}
export default Button;