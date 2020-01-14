import React from 'react'
import withApollo from '../lib/with-apollo'
import { useHelloQuery } from '../apollo'


const IndexPage: React.FC = () => {
  const { data, loading, error } = useHelloQuery()

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      This is the home page.
      <div>{data.hello}</div>
    </div>
  )
}

export default withApollo(IndexPage)
