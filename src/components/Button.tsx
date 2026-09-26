import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'outline-dark'

const cls: Record<Variant, string> = {
  primary: 'btn btn-primary',
  outline: 'btn btn-outline',
  'outline-dark': 'btn btn-outline-dark',
}

interface Props {
  variant?: Variant
  children: ReactNode
  href?: string
  onClick?: () => void
  external?: boolean
  className?: string
  ariaLabel?: string
}

export function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  external,
  className = '',
  ariaLabel,
}: Props) {
  const classes = `${cls[variant]} ${className}`
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
