import React, { CSSProperties } from 'react'

const Button = ({ children, isPrimary, style }: { children: React.ReactNode, isPrimary?: boolean, style?:CSSProperties }) => {
  return (
    <a 
        className={isPrimary ? "button-primary button" : "button"}
        style={style}
    >
        { children }
    </a>
  )
}

export default Button