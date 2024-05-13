
const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'd',
  disabled = false,
  className,
  onClick,
}) => {
  return (
    <button type={type} className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium ${ variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white' : variant === 'secondary' ? 'border-blue-600 hover:bg-blue-700 text-blue-600 hover:text-white' : 'bg-red-600 hover:bg-red-700 text-white'} ${size === 'm' ? 'px-2 py-1 text-xs' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'} ${disabled? 'opacity-50 cursor-not-allowed' : ''} ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button