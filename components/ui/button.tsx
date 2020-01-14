import React, { MouseEvent, } from 'react'


interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  type?: string
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {

  return (
    <>
      <button
        className="button"
        onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        .button {
          background-color: none;
          box-shadow: none;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 5px;
          margin-top: 7px;
          margin-bottom: 7px;
          height: 35px;
          min-width: 60px;
          cursor: pointer;
          border-radius: 5px;
        }
        .button:hover {
          background: rgba(0, 0, 0, 0.02)
        }
      `}</style>
    </>
  )
}

export default Button