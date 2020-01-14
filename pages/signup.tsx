import React from 'react'
import Form from '../components/ui/form'
import TextInput from '../components/ui/text-input'
import Button from '../components/ui/button'
import Card from '../components/ui/card'

const Signup: React.FC = () => {
  return (
    <div className="container">
      <Card elevation={3}>
        <div className="container">
          <div>Signup</div>
          <Form>
            <TextInput placeholder="Username"/>
            <TextInput placeholder="Password" type="password"/>
            <Button>Signup</Button>
          </Form>
        </div>
      </Card>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default Signup