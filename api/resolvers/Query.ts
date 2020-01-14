import { QueryResolvers } from './types'

const QueryResolve: QueryResolvers = {
  currentUser () {
    return { username: 'rlindskog', email: 'nope' }
  },
  user () {
    return { username: 'some other user', password: 'nope agian' }
  },
  hello: () => 'world'
}

export default QueryResolve