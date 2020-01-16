import React, { useState } from 'react'
import Form from './ui/form'
import TextInput from './ui/text-input'
import Button from './ui/button'
import { useSignUpMutation } from '../apollo'
import { useRouter } from 'next/router'

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [signUp, { error }] = useSignUpMutation()
  const router = useRouter()

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data } = await signUp({ variables: { username, password, email } })
      const { jwt } = data.signUp
      window.localStorage.setItem('token', jwt)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <Form onSubmit={submit}>
        <TextInput placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <TextInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextInput placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button type="submit">Signup</Button>
      </Form>
      {error?.graphQLErrors?.length && (
        <ul style={{ color: 'red' }}>
          <li>{error?.graphQLErrors?.map(e => <div>{e.message}</div>)}</li>
        </ul>
      )}
    </div>
  )
}

export default SignUpForm