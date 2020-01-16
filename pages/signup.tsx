import React from 'react'
// import Form from '../components/ui/form'
// import TextInput from '../components/ui/text-input'
// import Button from '../components/ui/button'
import Card from '../components/ui/card'
import SignUpForm from '../components/sign-up-form'
import withApollo from '../lib/with-apollo'

const Signup: React.FC = () => {
  return (
    <div className="container">
      <Card elevation={3}>
        <div className="container">
          <div>Signup</div>
          <SignUpForm/>
        </div>
      </Card>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default withApollo(Signup)