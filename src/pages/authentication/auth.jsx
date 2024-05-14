import { Link } from "react-router-dom"
import Button from "../../ui/button"

export const AuthLeft = ({ children, className,...props }) => {
  return (
    <div className={`font-bold grow-[3] min-w-[200px] ${className}`} {...props}>
      {children}
    </div>
  )
}

export const AuthRight = ({ children,className, ...props }) => {
  return (
    <div className={`grow-[7] min-w-[400px] ${className}`} {...props}>
      {children}
    </div>
  )
}

export const Auth = ({children}) => {
  return (
    <div className="bg-gray-900 w-screen min-h-screen flex flex-wrap">
      {children}
    </div>
  )
}
