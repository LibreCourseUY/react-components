import type { ReactNode, MouseEventHandler } from 'react'

// Visual style of the button
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'ghost'

// Size of the button
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  // Shows a spinner and disables the button while true
  isLoading?: boolean
  // Accepts any React node (icon libraries, SVGs, etc.)
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  // Extra Tailwind classes to extend styles from outside
  className?: string
  children?: ReactNode
  // Renders as <button> or <a> depending on use case
  as?: 'button' | 'a'
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  type?: 'button' | 'submit' | 'reset'
  // Required (i think) for icon-only buttons for screen reader accessibility
  ariaLabel?: string
}
