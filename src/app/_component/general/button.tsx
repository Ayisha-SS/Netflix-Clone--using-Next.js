import React from 'react'

interface ButtonProps{
    label: string;
    onClick?: ((e:any)=>void);
    onSubmit?: ((e:any)=>void);
    className?: string;
    icon?: React.ReactNode; 
    // type?: string;
}
const Button :React.FC<ButtonProps>= ({label,onClick,className,icon,onSubmit}) => {
  return (
    <button className={`text-white bg-red-600 ${className}`} onClick={onClick} onSubmit={onSubmit}>
        {label}
        {icon}
    </button>
  )
}
export default Button;