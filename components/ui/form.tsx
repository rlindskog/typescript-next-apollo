import React, { FormEvent } from 'react'

interface FormProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <>
      <form
        className="form"
        onSubmit={onSubmit}>
        {children}
      </form>
      <style jsx>{`
        .form {
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

export default Form