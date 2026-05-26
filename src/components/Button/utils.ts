import type { ButtonVariant, ButtonSize } from './types.ts'

// Maps each variant to its Tailwind classes
export const getVariantClasses = (variant: ButtonVariant): string => {
  const variants: Record<ButtonVariant, string> = {
    primary:   'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
    danger:    'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
    success:   'bg-green-500 text-white hover:bg-green-600 active:bg-green-700',
    ghost:     'bg-transparent text-blue-500 hover:bg-blue-50 active:bg-blue-100',
  }
  return variants[variant]
}

// Returns different classes for icon-only buttons (square) vs regular buttons (padded)
export const getSizeClasses = (size: ButtonSize, iconOnly: boolean): string => {
  if (iconOnly) {
    // Fixed square dimensions when there's no text
    const sizes: Record<ButtonSize, string> = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    }
    return sizes[size]
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  return sizes[size]
}