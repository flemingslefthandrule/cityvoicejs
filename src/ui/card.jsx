
const Card = ({ children, title, subtitle, className }) => {
  return (
    <div className={`max-w-md mx-5 rounded-lg shadow-md p-4 ${className}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      {children}
    </div>
  )
}

export default Card