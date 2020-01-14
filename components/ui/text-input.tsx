import React, { ChangeEvent } from 'react'


type InputType = 'text' | 'password'

interface TextInputProps {
  type?: InputType
  value?: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({ type = 'text', value, onChange, placeholder }) => {
  return (
    <>
    <input
      type={type}
      className="text-input"
      onChange={onChange}
      placeholder={placeholder}
      value={value}/>
      {/* width: 100%;
      box-sizing: border-box; */}
      <style jsx>{`
        .text-input {
          margin: 0;
          width: calc(100% - 30px);
          
          margin-top: 7px;
          margin-bottom: 7px;
          display: block;
          padding-left: 10px;
          padding-right: 10px;
          height: 35px;
          border-radius: 5px;
          background: none;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
      `}
      </style>
    </>
  )
}

export default TextInput