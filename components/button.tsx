import React, { CSSProperties } from 'react'

const Button = ({ children, href, ariaLabel, isPrimary, style, className }: { children: React.ReactNode, href: string, ariaLabel: string, isPrimary?: boolean, style?:CSSProperties, className?: string }) => {
  return (
    <a 
        className={`${isPrimary ? "button-primary button" : "button"} ${className}`}
        style={style}
        aria-label={ariaLabel}
        href={href}
    >
        { children }
    </a>
  )
}

export default Button