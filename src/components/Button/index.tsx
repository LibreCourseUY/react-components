import React, { useRef } from 'react'
import type { ButtonProps } from './types.ts'
import { getVariantClasses, getSizeClasses } from './utils.ts'
import styles from './style.module.css'

export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled = false,
  className = '',
  children,
  as = 'button',
  href,
  target,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) => {
  // Ref used to calculate ripple position relative to the button
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null)

  // When there's no children, the button is icon-only and gets square sizing
  const iconOnly = !children

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const el = buttonRef.current
    if (!el) return

    // Create ripple element and size it to cover the entire button
    const ripple = document.createElement('span')
    const rect = el.getBoundingClientRect()
    const rippleSize = Math.max(rect.width, rect.height)

    ripple.className = styles.rippleEffect
    ripple.style.width = `${rippleSize}px`
    ripple.style.height = `${rippleSize}px`

    // Position ripple centered on the click coordinates
    ripple.style.top = `${e.clientY - rect.top - rippleSize / 2}px`
    ripple.style.left = `${e.clientX - rect.left - rippleSize / 2}px`

    el.appendChild(ripple)

    // Clean up the ripple element after animation ends
    ripple.addEventListener('animationend', () => ripple.remove())

    onClick?.(e)
  }

  const baseClasses = [
    'relative overflow-hidden',
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-lg cursor-pointer border-none',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95',
    getVariantClasses(variant),
    getSizeClasses(size, iconOnly),
    className,
  ].join(' ')

  // Icons are hidden during loading to avoid layout shift
  const content = (
    <>
      {isLoading && <span aria-hidden="true" className={styles.spinner} />}
      {!isLoading && leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {!isLoading && rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </>
  )

  // Render as anchor when used for navigation
  if (as === 'a') {
    return (
      <a
        ref={buttonRef}
        href={href}
        target={target}
        onClick={handleClick}
        aria-label={ariaLabel}
        // Prevent tab-napping on external links!!!
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled || isLoading}
      // Communicates loading state to screen readers
      aria-busy={isLoading}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={baseClasses}
    >
      {content}
    </button>
  );
};