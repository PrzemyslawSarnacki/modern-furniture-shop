import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  isLoading,
  disabled,
  ...props
}) => {
  const baseStyles = 'font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group'
  
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5 focus:ring-gray-900',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-lg focus:ring-gray-500',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg hover:-translate-y-0.5 focus:ring-gray-900 transition-all',
    ghost: 'text-gray-900 hover:bg-gray-100 hover:shadow-md focus:ring-gray-500',
    gradient: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white hover:shadow-2xl hover:-translate-y-1 focus:ring-gray-900 hover:from-gray-800 hover:via-gray-700 hover:to-gray-800',
  }
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      )}
      {(variant === 'primary' || variant === 'gradient') && (
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      )}
    </button>
  )
}
